use anyhow::Result;
use serde::{Deserialize, Serialize};
use spin_sdk::http::{IntoResponse, Params, Request, Response, ResponseBuilder, Router};
use spin_sdk::http_component;
use spin_sdk::key_value::Store;

#[derive(Serialize, Deserialize)]
pub(crate) struct Wishlist {
    name: String,
    items: Vec<String>,
}

impl Wishlist {
    // Name = "Thorsten Hans" -> thorsten%20hans
    // Name = "Joe" -> joe
    pub fn get_key(&self) -> String {
        urlencoding::encode(self.name.clone().to_lowercase().as_str()).to_string()
    }
}

#[http_component]
fn handle_api_wishlists(req: Request) -> anyhow::Result<impl IntoResponse> {
    let mut router = Router::default();
    router.get("/api/wishlists", get_all_wishlists);
    router.post("/api/wishlists", add_wishlist);
    Ok(router.handle(req))
}

fn get_all_wishlists(_: Request, _: Params) -> Result<impl IntoResponse> {
    let mut result: Vec<Wishlist> = vec![];
    let store = Store::open_default()?;
    let all_keys = store.get_keys()?;
    for key in all_keys {
        match store.get_json::<Wishlist>(key)? {
            Some(wl) => result.push(wl),
            None => (),
        }
    }
    let payload = serde_json::to_vec(&result)?;

    Ok(ResponseBuilder::new(200)
        .header("content-type", "application/json")
        .body(payload)
        .build())
}

fn add_wishlist(req: Request, _: Params) -> Result<impl IntoResponse> {
    let Ok(model) = serde_json::from_slice::<Wishlist>(req.body()) else {
        return Ok(Response::new(400, "Bad Request"));
    };

    let store = Store::open_default()?;
    let key = model.get_key();
    store.set_json(key, &model)?;

    Ok(ResponseBuilder::new(201).body(()).build())
}

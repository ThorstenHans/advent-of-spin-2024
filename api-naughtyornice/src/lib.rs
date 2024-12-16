use anyhow::Result;
use bindings::deps::components::naughty_or_nice::scorer;
use serde::Serialize;
use spin_sdk::http::conversions::IntoBody;
use spin_sdk::http::{IntoResponse, Params, Request, ResponseBuilder, Router};
use spin_sdk::http_component;
use urlencoding::decode;

mod bindings;

/// A simple Spin HTTP component.
#[http_component]
fn handle_api_naughty_or_nice(req: Request) -> anyhow::Result<impl IntoResponse> {
    let mut router = Router::default();
    router.get("/api/naughty-or-nice/:name", get_naughty_or_nice_score);
    Ok(router.handle(req))
}

#[derive(Serialize)]
pub struct ResponseModel {
    name: String,
    score: u8,
}

impl IntoBody for ResponseModel {
    fn into_body(self) -> Vec<u8> {
        serde_json::to_vec(&self).unwrap()
    }
}

fn get_naughty_or_nice_score(_: Request, parameters: Params) -> Result<impl IntoResponse> {
    // enforced by the Spin Router
    let name = parameters.get("name").unwrap();
    let name = decode(name)?;
    let name = name.into_owned();

    let score = scorer::score(name.as_str());

    let result = ResponseModel {
        name: String::from(name),
        score: score,
    };
    Ok(ResponseBuilder::new(200)
        .header("content-type", "application/json")
        .body(result)
        .build())
}

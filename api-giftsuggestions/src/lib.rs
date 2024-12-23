use bindings::deps::components::advent_of_spin::generator::{self, Suggestions};
use serde::{Deserialize, Serialize};
use spin_sdk::http::conversions::IntoBody;
use spin_sdk::http::{IntoResponse, Method, Request, Response, ResponseBuilder};
use spin_sdk::http_component;
mod bindings;

#[derive(Deserialize)]
pub struct RequestModel {
    name: String,
    age: u8,
    likes: String,
}

#[derive(Serialize)]
pub struct ResponseModel {
    name: String,
    #[serde(rename = "giftSuggestions")]
    gift_suggestions: String,
}

impl From<Suggestions> for ResponseModel {
    fn from(value: Suggestions) -> Self {
        Self {
            name: value.name.clone(),
            gift_suggestions: value.suggestions.clone(),
        }
    }
}

impl IntoBody for ResponseModel {
    fn into_body(self) -> Vec<u8> {
        serde_json::to_vec(&self).unwrap()
    }
}

#[http_component]
fn handle_api_giftsuggestions(req: Request) -> anyhow::Result<impl IntoResponse> {
    match req.method() {
        &Method::Post => {
            let Ok(model) = serde_json::from_slice::<RequestModel>(req.body()) else {
                return Ok(Response::new(400, "Invalid Payload provided"));
            };

            let infer_res =
                generator::suggest(model.name.as_str(), model.age, model.likes.as_str()).unwrap();
            let result = ResponseModel::from(infer_res);
            return Ok(ResponseBuilder::new(200)
                .header("content-type", "application/json")
                .body(result)
                .build());
        }
        _ => return Ok(Response::new(405, "Method not supported")),
    }
}

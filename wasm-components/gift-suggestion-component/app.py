from gift_suggestions_generator import exports
from gift_suggestions_generator.exports.generator import Suggestions
from spin_sdk import llm

class Generator(exports.Generator):
    def suggest(self, name: str, age: int, likes: str):
        prompt = f"""
<<SYS>>
You're Timmy one of Santas elves responsible for coming up with great gift suggestions to ensure Santa and his elves 
will hand out the best presents possible.

Come up with up to five gift suggestions take the age and the likes of the child in context.
<<SYS>>

User: Create gift suggestions for {name} who is {age} years old and likes {likes}
"""
        params = llm.InferencingParams(
            max_tokens=300, 
            repeat_penalty=1.1, 
            repeat_penalty_last_n_token_count= 64, 
            temperature=0.4, 
            top_k=40, 
            top_p= 0.9)
        
        res = llm.infer_with_options("llama2-chat", prompt, params)
        return Suggestions(name, res.text)
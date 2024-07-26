import gradio as gr
import os
from langchain_community.llms import HuggingFaceEndpoint
from langchain.chains import LLMChain
from langchain_core.prompts import PromptTemplate
from dotenv import load_dotenv

load_dotenv()

# Setting the API
model_Api = os.getenv("HUGGINGFACEHUB_API_TOKEN")
repo_id = "mistralai/Mistral-7B-Instruct-v0.3"

def QueryBuilding():
    Query_template = """Consider yourself as a personalized helper to let farmers know how to handle biogas plant, for the user {query},
                    
                    Answer: provide guidance and support to the user in a more detailed, simple and straightforward manner."""
    return Query_template

def PromptEngineering():
    Prompt = PromptTemplate.from_template(QueryBuilding())
    return Prompt

def LLM_building():
    llm_model = HuggingFaceEndpoint(
        repo_id=repo_id,
        max_length=128,
        token=model_Api
    )
    return llm_model

def langchainning():
    llm_chain = LLMChain(prompt=PromptEngineering(), llm=LLM_building())
    return llm_chain

def user_input(user):
    ans = langchainning().run(user)
    return ans

def chat_interface(message, history):
    response = user_input(message)
    return response

iface = gr.ChatInterface(
    fn=chat_interface,
    title="Gas Whizz",
    description="Hello Friend, How can I help you today?",
    examples=["How does a biogas plant work?", "What are the benefits of biofuel?"],
    retry_btn=None,
    undo_btn="Delete Previous",
    clear_btn="Clear",
)

if __name__ == "__main__":
    iface.launch(share=True)
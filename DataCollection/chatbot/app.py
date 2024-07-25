import streamlit as st
from chat import langchainning
from checker import checking, health_keywords

def user_input(user):
   
    ans = langchainning().run(user)
    return ans

st.title("Gas Whizz")
st.caption("Hello Friend, How can I help you today?")

if "messages" not in st.session_state:
    st.session_state.messages = []



q = st.chat_input("Type something here....")

def checking(query):
    flag = False
    list_of_words = query.split(" ")
    for i in list_of_words:
        if i.lower() in health_keywords:
            flag = True
            break
    return flag






# 
if q is not None and len(q.strip()) > 0:  
    if checking(q):
        st.session_state.messages.append(("user", q))
        st.session_state.messages.append(("assistant", user_input(q)))

        for role, message in st.session_state.messages:
            if role == "user":
                st.chat_message("user")
                st.write(message)
            elif role == "assistant":
                st.chat_message("assistant")
                st.write(message)
    else:

        st.write("I'm a Biogas plant helper chatbot. Please ask me about Biogas or Biofuel only.")
        

b =  st.button("Clear Chat")
if b:
    st.session_state.messages = []


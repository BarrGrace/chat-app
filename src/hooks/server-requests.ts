import { Message } from '../types/message';
const endpoint = 'http://localhost:8000';

export async function getMessages() {

  return await fetch(endpoint + '/mockMessages')
      .then((res) => res.json());
}
export async function getUsers() {

  return await fetch(`${endpoint}/mockUsers`)
    .then((res) => res.json());
}

export async function getUserDetails(userId: number) {

  const res = await fetch(`${endpoint}/users/${userId}`);
  return (await res.json());
}

export async function addNewMessage(message: Message) {
  
  const data = {

    method: "Post",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(message)
  }

  const res = await fetch(endpoint + '/newMessages', data);
  return await res.json();//successfully return the message with a name & likes = [] to the client.
}

export async function changeMessageLikes(messageId: number, userId: number, like: boolean) {
 
  const data = {

    method: "Post",
    headers: {

      'Content-Type': 'application/json'
    },
    body: JSON.stringify({message: messageId, user: userId, addlike: like})
  } 

  await fetch(endpoint + '/newLikes', data);
  await fetch(endpoint + '/mockMessages');
}
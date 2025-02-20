import { db } from "./server/db";

async function createUser() {
  try {
    await db.user.create({
     data:{
        email: "test@gmail.com",
        firstname: "John",
        lastname: "Doe",
        // imageURL: "http"
    },
      
    });

    console.log("User created successfully!");
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

createUser();

// console.log("User created successfully!");

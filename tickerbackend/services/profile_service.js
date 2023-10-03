import {
    createUserRepo,
    getUserByIdRepo,
    getUserRepo,
    updateUserRepo,
    deleteUserByIdRepo
} from "../repository/profile_repo.js";
import bcrypt from 'bcrypt'; // Import the bcrypt library

export const saveUserService = async (data) => {
    const { userName, password, email, address, nic, cardType, role } = data;
    
    try {
        // Hash the password before saving it
        const hashedPassword = await bcrypt.hash(password, 10); // You can adjust the number of salt rounds as needed

        // Create a user object with the hashed password
        const user = {
            userName,
            password: hashedPassword, // Store the hashed password
            email,
            address,
            nic,
            cardType,
            role,
        };

        // Save the user to the database
        await createUserRepo(user);

        return Promise.resolve("Successfully saved User.");
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const getUserIdService = async (id) => {
    try {
        const User = await getUserByIdRepo(id);
        return Promise.resolve(User);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const getUserService = async () => {
    try {
        const User = await getUserRepo();
        return Promise.resolve(User);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const updateUserService = async (id, data) => {
    try {
        const User = await updateUserRepo(id, data);
        return Promise.resolve(User);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};

export const deleteUserIdService = async (id) => {
    try {
        const User = await deleteUserByIdRepo(id);
        return Promise.resolve(User);
    } catch (err) {
        throw new Error(err.message, err.status);
    }
};
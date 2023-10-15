import React from 'react'
import { User } from '../models/User'

interface UserListProps {
    userList: User[]
}

const UserList = ({ userList }: UserListProps) => {
    return (
        <table className="table-auto">
            <thead>
                <tr>
                    <th className="px-4 py-2">User Photo</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Username</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Phone</th>
                    <th className="px-4 py-2">Website</th>
                </tr>
            </thead>
            <tbody>
                {userList.map((user) => (
                    <tr key={user.id}>
                        <td className="border px-4 py-2">
                            <img src="https://via.placeholder.com/150" alt="user" />
                        </td>
                        <td className="border px-4 py-2">{user.name}</td>
                        <td className="border px-4 py-2">{user.username}</td>
                        <td className="border px-4 py-2">{user.email}</td>
                        <td className="border px-4 py-2">{user.phone}</td>
                        <td className="border px-4 py-2">{user.website}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default UserList
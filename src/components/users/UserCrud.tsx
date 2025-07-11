import React, { useState } from "react";
import api from "../../api/axiosConfig";
import UserList from "./UserList";

// Type definitions
interface User {
  id: string;
  name: string;
  email: string;
}

interface UserCrudProps {
  load: () => void;
  users: User[];
}

interface FormData {
  id: string;
  name: string;
  email: string;
}

const UserCrud: React.FC<UserCrudProps> = ({ load, users }) => {
  /* State definitions */
  const [formData, setFormData] = useState<FormData>({
    id: "",
    name: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /* Helper functions */
  const resetForm = () => {
    setFormData({ id: "", name: "", email: "" });
    setError(null);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  /* Form handlers */
  const save = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setError("Please fill in all required fields");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await api.post("/create", {
        name: formData.name,
        email: formData.email,
      });
      
      resetForm();
      load();
      // Success notification (could be improved with a toast library)
      console.log("User created successfully");
    } catch (err) {
      console.error("Error creating user:", err);
      setError("Failed to create user. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const editUser = (user: User) => {
    setFormData({
      id: user.id,
      name: user.name,
      email: user.email,
    });
    setError(null);
  };

  const deleteUser = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this user?")) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await api.delete(`/delete/${id}`);
      load();
      console.log("User deleted successfully");
    } catch (err) {
      console.error("Error deleting user:", err);
      setError("Failed to delete user. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const update = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!formData.id) {
      setError("User Details Not Found!");
      return;
    }
    
    if (!formData.name.trim() || !formData.email.trim()) {
      setError("Please fill in all required fields");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await api.put("/update", {
        id: formData.id,
        name: formData.name,
        email: formData.email,
      });

      resetForm();
      load();
      console.log("User updated successfully");
    } catch (err) {
      console.error("Error updating user:", err);
      setError("Failed to update user. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  /* JSX */
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">
          {formData.id ? "Update User" : "Create New User"}
        </h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={formData.id ? update : save} className="space-y-4">
          <input
            type="hidden"
            value={formData.id}
            onChange={(e) => handleInputChange("id", e.target.value)}
          />
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              disabled={isLoading}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              disabled={isLoading}
              required
            />
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading 
                ? "Processing..." 
                : formData.id 
                ? "Update User" 
                : "Create User"
              }
            </button>
            
            {formData.id && (
              <button
                type="button"
                onClick={resetForm}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                disabled={isLoading}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <UserList 
        users={users} 
        editUser={editUser} 
        deleteUser={deleteUser} 
        isLoading={isLoading}
      />
    </div>
  );
};

export default UserCrud;

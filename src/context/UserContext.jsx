import { createContext, useState, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Initial Values
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Customer", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "Active" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Customer", status: "Inactive" },
    { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Customer", status: "Active" },
    { id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "Moderator", status: "Active" },
  ]);

  const [userActivityData, setUserActivityData] = useState([
    { name: "Mon", "0-4": 20, "4-8": 40, "8-12": 60, "12-16": 80, "16-20": 100, "20-24": 30 },
    { name: "Tue", "0-4": 30, "4-8": 50, "8-12": 70, "12-16": 90, "16-20": 110, "20-24": 40 },
    { name: "Wed", "0-4": 40, "4-8": 60, "8-12": 80, "12-16": 100, "16-20": 120, "20-24": 50 },
    { name: "Thu", "0-4": 50, "4-8": 70, "8-12": 90, "12-16": 110, "16-20": 130, "20-24": 60 },
    { name: "Fri", "0-4": 60, "4-8": 80, "8-12": 100, "12-16": 120, "16-20": 140, "20-24": 70 },
    { name: "Sat", "0-4": 70, "4-8": 90, "8-12": 110, "12-16": 130, "16-20": 150, "20-24": 80 },
    { name: "Sun", "0-4": 80, "4-8": 100, "8-12": 120, "12-16": 140, "16-20": 160, "20-24": 90 },
  ]);

  const [userDemographicsData, setUserDemographicsData] = useState([
    { name: "18-24", value: 400 },
    { name: "25-34", value: 600 },
    { name: "35-44", value: 300 },
    { name: "45-54", value: 200 },
    { name: "55+", value: 150 },
  ]);

  
  const [userGrowthData, setUserGrowthData] = useState([
    { month: "January", users: 1200 },
    { month: "February", users: 1350 },
    { month: "March", users: 1450 },
    { month: "April", users: 1600 },
  ]);

  // Context Methods
  const addUser = (user) => setUsers([...users, { id: users.length + 1, ...user }]);
  const updateUserActivityData = (newData) => setUserActivityData([...userActivityData, ...newData]);
  const updateUserDemographicsData = (newData) => setUserDemographicsData([...userDemographicsData, ...newData]);
  const updateUserGrowthData = (newData) => setUserGrowthData([...userGrowthData, ...newData]);

  return (
    <UserContext.Provider
      value={{
        users,
        userActivityData,
        userDemographicsData,
        userGrowthData,
        addUser,
        updateUserActivityData,
        updateUserDemographicsData,
        updateUserGrowthData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUsers must be used within a UserProvider");
  }
  return context;
};
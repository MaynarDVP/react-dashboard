// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { useUsers } from "./UserProvider";

// const RegisterUsers = () => {
//   const {
//     addUser,
//     updateUserActivityData,
//     updateUserDemographicsData,
//     updateUserGrowthData,
//   } = useUsers();

//   // Validaciones con Yup
//   const userSchema = Yup.object().shape({
//     name: Yup.string().required("Name is required"),
//     email: Yup.string().email("Invalid email").required("Email is required"),
//     role: Yup.string().required("Role is required"),
//     status: Yup.string().oneOf(["Active", "Inactive"]).required("Status is required"),
//   });

//   const activitySchema = Yup.object().shape({
//     name: Yup.string().required("Day is required"),
//     "0-4": Yup.number().required("Required").positive("Must be positive"),
//     "4-8": Yup.number().required("Required").positive("Must be positive"),
//     "8-12": Yup.number().required("Required").positive("Must be positive"),
//     "12-16": Yup.number().required("Required").positive("Must be positive"),
//     "16-20": Yup.number().required("Required").positive("Must be positive"),
//     "20-24": Yup.number().required("Required").positive("Must be positive"),
//   });

//   const demographicSchema = Yup.object().shape({
//     name: Yup.string().required("Age range is required"),
//     value: Yup.number().required("Value is required").positive("Must be positive"),
//   });

//   const growthSchema = Yup.object().shape({
//     month: Yup.string().required("Month is required"),
//     users: Yup.number().required("Users are required").positive("Must be positive"),
//   });

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Manage User Data</h1>

//       {/* Add User Form */}
//       <Formik
//         initialValues={{
//           name: "",
//           email: "",
//           role: "",
//           status: "Active",
//         }}
//         validationSchema={userSchema}
//         onSubmit={(values, { resetForm }) => {
//           addUser(values);
//           localStorage.setItem("users", JSON.stringify(values));
//           resetForm();
//           alert("User added successfully!");
//         }}
//       >
//         {() => (
//           <Form className="border p-4 rounded shadow mb-6">
//             <h2 className="text-xl font-bold mb-2">Add User</h2>
//             <div>
//               <label className="block mb-1">Name</label>
//               <Field name="name" className="border p-2 rounded w-full" />
//               <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
//             </div>
//             <div>
//               <label className="block mb-1">Email</label>
//               <Field name="email" type="email" className="border p-2 rounded w-full" />
//               <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
//             </div>
//             <div>
//               <label className="block mb-1">Role</label>
//               <Field as="select" name="role" className="border p-2 rounded w-full">
//                 <option value="">Select a role</option>
//                 <option value="Customer">Customer</option>
//                 <option value="Admin">Admin</option>
//                 <option value="Moderator">Moderator</option>
//               </Field>
//               <ErrorMessage name="role" component="div" className="text-red-500 text-sm" />
//             </div>
//             <div>
//               <label className="block mb-1">Status</label>
//               <Field as="select" name="status" className="border p-2 rounded w-full">
//                 <option value="Active">Active</option>
//                 <option value="Inactive">Inactive</option>
//               </Field>
//               <ErrorMessage name="status" component="div" className="text-red-500 text-sm" />
//             </div>
//             <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">
//               Add User
//             </button>
//           </Form>
//         )}
//       </Formik>

//       {/* Update Activity Data */}
//       <Formik
//         initialValues={{
//           name: "",
//           "0-4": "",
//           "4-8": "",
//           "8-12": "",
//           "12-16": "",
//           "16-20": "",
//           "20-24": "",
//         }}
//         validationSchema={activitySchema}
//         onSubmit={(values, { resetForm }) => {
//           updateUserActivityData([values]);
//           localStorage.setItem("userActivityData", JSON.stringify(values));
//           resetForm();
//           alert("Activity data updated successfully!");
//         }}
//       >
//         {() => (
//           <Form className="border p-4 rounded shadow mb-6">
//             <h2 className="text-xl font-bold mb-2">Update Activity Data</h2>
//             <div>
//               <label className="block mb-1">Day</label>
//               <Field name="name" className="border p-2 rounded w-full" />
//               <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
//             </div>
//             {["0-4", "4-8", "8-12", "12-16", "16-20", "20-24"].map((range) => (
//               <div key={range}>
//                 <label className="block mb-1">{range} Hours</label>
//                 <Field name={range} className="border p-2 rounded w-full" />
//                 <ErrorMessage name={range} component="div" className="text-red-500 text-sm" />
//               </div>
//             ))}
//             <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">
//               Update Activity Data
//             </button>
//           </Form>
//         )}
//       </Formik>

//       {/* Other forms for demographics and growth data can follow the same pattern */}
//     </div>
//   );
// };

// export default RegisterUsers;

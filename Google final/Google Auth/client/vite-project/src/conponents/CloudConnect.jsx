// import React, { useState } from 'react';

// const CloudConnector = () => {
//   const [formData, setFormData] = useState({
//     cloudProvider: '',
//     secretKey: '',
//     accessKey: '',
//     accountId: '',
//     region: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Submitted Data:', formData);
//   };

//   const regions = {
//     AWS: ['US-East-1', 'US-West-1', 'US-West-2', 'EU-Central-1', 'EU-West-1'],
//     Azure: ['US-East-1', 'US-West-1', 'US-West-2', 'EU-Central-1', 'EU-West-1'],
//     GCP: ['US-East-1', 'US-West-1', 'US-West-2', 'EU-Central-1', 'EU-West-1']
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-6">Cloud Connector</h2>

//         {/* Cloud Provider Selection */}
//         <div>
//           <label htmlFor="cloudProvider" className="block text-sm font-medium text-gray-700">
//             Cloud Provider
//           </label>
//           <select
//             name="cloudProvider"
//             id="cloudProvider"
//             value={formData.cloudProvider}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//           >
//             <option value="">Select Cloud Provider</option>
//             <option value="AWS">AWS</option>
//             <option value="Azure">Azure</option>
//             <option value="GCP">GCP</option>
//           </select>
//         </div>

//         {/* Conditionally render the form based on cloudProvider selection */}
//         {formData.cloudProvider && (
//           <form onSubmit={handleSubmit} className="space-y-4 mt-6">
//             <div>
//               <label htmlFor="secretKey" className="block text-sm font-medium text-gray-700">
//                 Secret Key
//               </label>
//               <input
//                 type="text"
//                 name="secretKey"
//                 id="secretKey"
//                 value={formData.secretKey}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="accessKey" className="block text-sm font-medium text-gray-700">
//                 Access Key
//               </label>
//               <input
//                 type="text"
//                 name="accessKey"
//                 id="accessKey"
//                 value={formData.accessKey}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="accountId" className="block text-sm font-medium text-gray-700">
//                 Account ID
//               </label>
//               <input
//                 type="text"
//                 name="accountId"
//                 id="accountId"
//                 value={formData.accountId}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="region" className="block text-sm font-medium text-gray-700">
//                 Region
//               </label>
//               <select
//                 name="region"
//                 id="region"
//                 value={formData.region}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 required
//               >
//                 {regions[formData.cloudProvider].map((region) => (
//                   <option key={region} value={region}>
//                     {region}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
//             >
//               Submit
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CloudConnector;

import React, { useState } from 'react';

const CloudConnector = () => {
  const [formData, setFormData] = useState({
    cloudProvider: '',
    secretKey: '',
    accessKey: '',
    accountId: '',
    region: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
  };

  const regions = {
    AWS: ['US-East-1', 'US-West-1', 'US-West-2', 'EU-Central-1', 'EU-West-1'],
    Azure: ['US-East-1', 'US-West-1', 'US-West-2', 'EU-Central-1', 'EU-West-1'],
    GCP: ['US-East-1', 'US-West-1', 'US-West-2', 'EU-Central-1', 'EU-West-1']
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Cloud Connector</h2>

        {/* Cloud Provider Selection */}
        {!formData.cloudProvider ? (
          <div>
            <label htmlFor="cloudProvider" className="block text-sm font-medium text-gray-700">
              Cloud Provider
            </label>
            <select
              name="cloudProvider"
              id="cloudProvider"
              value={formData.cloudProvider}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            >
              <option value="">Select Cloud Provider</option>
              <option value="AWS">AWS</option>
              <option value="Azure">Azure</option>
              <option value="GCP">GCP</option>
            </select>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
           <div className="text-center">
            <p className="text-gray-700 font-medium">
            <span className="font-bold text-center ">{formData.cloudProvider}</span>
            </p>
           </div>
           <div>
              <label htmlFor="accountId" className="block text-sm font-medium text-gray-700">
                Account ID
              </label>
              <input
                type="number"
                name="accountId"
                id="accountId"
                value={formData.accountId}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="secretKey" className="block text-sm font-medium text-gray-700">
                Secret Key
              </label>
              <input
                type="password"
                name="secretKey"
                id="secretKey"
                value={formData.secretKey}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="accessKey" className="block text-sm font-medium text-gray-700">
                Access Key
              </label>
              <input
                type="password"
                name="accessKey"
                id="accessKey"
                value={formData.accessKey}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                Region
              </label>
              <select
                name="region"
                id="region"
                value={formData.region}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              >
                <option value="">Select Region</option>
                {regions[formData.cloudProvider].map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CloudConnector;


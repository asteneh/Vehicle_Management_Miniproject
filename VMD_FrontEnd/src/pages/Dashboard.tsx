import React from 'react';
import { useVehicles } from '../hooks/useVehicles';
import VehicleTable from '../components/VehicleTable';
import VehicleForm from '../components/VehicleForm';

const Dashboard = () => {
  const { vehiclesQuery } = useVehicles();

  if (vehiclesQuery.isLoading) return <p>Loading...</p>;
  if (vehiclesQuery.isError) return <p>Error: {vehiclesQuery.error.message}</p>;

  return (
    <div>
      <h1>Vehicle Management Dashboard</h1>
      {/* Vehicle Form */}
      <VehicleForm />

      {/* Vehicle Table */}
      <VehicleTable data={vehiclesQuery.data || []} />
    </div>
  );
};

export default Dashboard;

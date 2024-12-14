import React, { useState } from 'react';
import { useVehicles } from '../hooks/useVehicles';

const VehicleForm = () => {
  const { addVehicleMutation, updateStatusMutation } = useVehicles();

  // Form state
  const [formType, setFormType] = useState('create'); // 'create' or 'update'
  const [vehicleId, setVehicleId] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('Active');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formType === 'create') {
      addVehicleMutation.mutate({ name, status }, {
        onSuccess: () => {
          alert('Vehicle added successfully!');
          resetForm();
        },
      });
    } else if (formType === 'update') {
      updateStatusMutation.mutate(vehicleId, { status }, {
        onSuccess: () => {
          alert('Vehicle status updated successfully!');
          resetForm();
        },
      });
    }
  };

  // Reset form state
  const resetForm = () => {
    setFormType('create');
    setVehicleId('');
    setName('');
    setStatus('Active');
  };

  return (
    <div>
      <h3>{formType === 'create' ? 'Add New Vehicle' : 'Update Vehicle Status'}</h3>
      <form onSubmit={handleSubmit}>
        {/* Show name input for "create" form type */}
        {formType === 'create' && (
          <div>
            <label>Vehicle Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}

        {/* Show vehicle ID input for "update" form type */}
        {formType === 'update' && (
          <div>
            <label>Vehicle ID:</label>
            <input
              type="text"
              value={vehicleId}
              onChange={(e) => setVehicleId(e.target.value)}
              required
            />
          </div>
        )}

        {/* Common status dropdown */}
        <div>
          <label>Status:</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Maintenance">Maintenance</option>
          </select>
        </div>

        {/* Submit button */}
        <button type="submit">
          {formType === 'create' ? 'Add Vehicle' : 'Update Status'}
        </button>

        {/* Toggle form type */}
        <button type="button" onClick={() => setFormType(formType === 'create' ? 'update' : 'create')}>
          Switch to {formType === 'create' ? 'Update' : 'Add'}
        </button>
      </form>
    </div>
  );
};

export default VehicleForm;

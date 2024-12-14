import { useQuery, useMutation, useQueryClient } from 'react-query';
import { fetchVehicles, addVehicle, updateVehicleStatus } from '../api/vehicleApi';

export const useVehicles = () => {
  const queryClient = useQueryClient();

  const vehiclesQuery = useQuery('vehicles', fetchVehicles);

  const addVehicleMutation = useMutation(addVehicle, {
    onSuccess: () => queryClient.invalidateQueries('vehicles'),
  });

  const updateStatusMutation = useMutation(updateVehicleStatus, {
    onSuccess: () => queryClient.invalidateQueries('vehicles'),
  });

  return { vehiclesQuery, addVehicleMutation, updateStatusMutation };
};

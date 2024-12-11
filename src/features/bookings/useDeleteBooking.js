import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteBooking as apiDeleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const {
    mutate: deleteBooking, // Properly rename mutate to deleteBooking for clarity
    isLoading: isLoadingDelete,
    error,
  } = useMutation({
    mutationFn: (bookingId) => apiDeleteBooking(bookingId), // Use the correctly imported function
    onSuccess: (data) => {
      toast.success(`Booking  was successfully deleted`);
      // Invalidate relevant queries to refresh the data
      queryClient.invalidateQueries(["bookings"]);
    },
    onError: () => toast.error("There was an error while deleting the booking"),
  });

  return { deleteBooking, isLoadingDelete, error };
}

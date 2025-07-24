import { api } from "@/services/api";
import { useAuthStore } from "@/store/useAuthStore";
import { User } from "@/types/auth";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const useAuth = () => {
  const { user, setUser } = useAuthStore();

  const { data, isLoading, isError } = useQuery<User | null>({
    queryKey: ["get-profile"],
    queryFn: async () => {
      const response = await api("/auth/get-profile");

      return response.data.user ?? null;
    },

    enabled: !user,
    staleTime: 10 * 60 * 1000, // fresh data every 10 minutes in milliseconds
  });

  useEffect(() => {
    if (data) setUser(data);
  }, [data, setUser]);

  return { user, isLoading, isError };
};

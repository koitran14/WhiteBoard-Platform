import { create } from "zustand";

interface RequestToJoinModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useRequestModal = create<RequestToJoinModal>((set) => ({
  isOpen: false,
  onOpen: () => set({
    isOpen: true,
  }),
  onClose: () => set({
    isOpen: false,
  }),
}));
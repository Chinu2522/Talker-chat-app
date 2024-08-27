export const createChatSlice = (set, get) => ({
    selectedChatType: undefined,
    selectedChatData: undefined,
    selectedChatMessages: [],
    directMessagesContacts: [],
    isUploading: false,
    isDownloading: false,
    fileUploadProgress: 0,
    fileDownloadProgress: 0,
    channels: [],
    setChannels:(channels)=>set({channels}),
    setIsUploading: (isUploading) => set({ isUploading }),
    setIsDownloading: (isDownloading) => set({ isDownloading }),
    setFileUploadProgress: (fileUploadProgress)=>({fileUploadProgress}),
    setFileDownloadProgress: (fileDownloadProgress) => ({fileDownloadProgress}),
    setSelectedChatType: (selectedChatType) => set({ selectedChatType }),
    setSelectedChatData: (selectedChatData) => set({ selectedChatData }),
    setSelectedChatMessages: (selectedChatMessages) => set({ selectedChatMessages }),
    setDirectMessagesContacts: (directMessagesContacts) => set({ directMessagesContacts }),

    addChannel: (channel) => {
        const channels = get().channels;
        set({
            channels: [
                channel, ...channels]
        });
    },
    closeChat: () => set({ selectedChatData: undefined, selectedChatType: undefined, selectedChatMessages: [] }),
    addMessage: (message) => {
        const selectedChatMessages = get().selectedChatMessages;
        const selectedChatType = get().selectedChatType;

        set({
            selectedChatMessages: [
                ...selectedChatMessages, {
                    ...message,
                    recipient: selectedChatType === "group chat"
                        ? message.recipient
                        : message.recipient._id,
                    sender: selectedChatType === "group chat"
                        ? message.sender
                        : message.sender._id,
                },
            ],
        });
    },

});
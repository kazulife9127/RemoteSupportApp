export type RootStackParamList = {
    Message: undefined; // この画面にはパラメータが不要
    ChatRoomScreen: { chatId: string }; // この画面では`chatId`が必要
    Settings: undefined; // この画面にはパラメータが不要
  };
  
// // ファイル名: ContactScreen.tsx
// import React, { useState } from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';
// //import { useFriends } from '../contexts/FriendsContext';

// interface Friend {
//   id: string;
//   email: string;
//   username: string;
// }

// const initialFriends: Friend[] = [
//   { id: '1', email: 'friend1@example.com', username: 'UserOne' },
//   { id: '2', email: 'friend2@example.com', username: 'UserTwo' },
//   // ダミーデータ、実際にはAPIからのデータを想定
// ];

// const ContactScreen: React.FC = () => {
//   const { friends } = useFriends();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>友達リスト</Text>
//       <FlatList
//         data={friends}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.friendItem}>
//             <Text>{item.username}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 20,
//     margin: 10,
//   },
//   friendItem: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
// });

// export default ContactScreen;

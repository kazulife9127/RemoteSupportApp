import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [count, setCount] = useState(0);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#333' : '#FFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const textStyle = {
    color: isDarkMode ? '#FFF' : '#333',
    fontSize: 20,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <View>
          <Text style={textStyle}>Tap me</Text>
          <Text style={textStyle}>{count}</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // スタイルは上記で直接適用していますが、必要に応じてここで定義できます。
});

export default App;
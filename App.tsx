import { SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import PsGen from './components/PsGen';
export default function App() {
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView>
        <PsGen />
      </SafeAreaView>
    </ScrollView>
  );
}

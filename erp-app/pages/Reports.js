import React from 'react'
import { Button, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
// import OverallKpi from './OverallKpi'
import EmployeeProjects from './EmployeeProjects'


function Reports({navigation}) {

        return (
           <View style={styles.container}>
             <Text>Reports</Text>
             {/* <OverallKpi /> */}
             <EmployeeProjects />
             <Button style={styles.button} title="Back to Dashboard" onPress={() => navigation.navigate("Dashboard")} />
             <Button style={styles.button} title="Previous Page" onPress={() => navigation.goBack()} />
          </View>
        );
      }
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          // marginTop: StatusBar.currentHeight || 0,
          alignItems: 'center',
          justifyContent: 'center',
        },
      });

export default Reports

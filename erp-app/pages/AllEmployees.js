import React, { useEffect, useState } from 'react'
import { Button, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View, ScrollView } from 'react-native'


import { theme } from 'galio-framework';
import EmployeeProfile from './EmployeeProfile'
import KpiPage from './KpiPage'
import Reports from './Reports'
import DrawerContent from './DrawerContent'


function AllEmployees({navigation}) {

  const [employees, setEmployees] = useState([])



  useEffect(() => {
     fetch("http://192.168.1.6:8000/api/employees", {
      method: 'GET',
      headers: { 'Authorization': 'bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYxMDcxMzI3OSwiZXhwIjoxNjEwNzE2ODc5LCJuYmYiOjE2MTA3MTMyNzksImp0aSI6IkFxbFU2c2ZBNmU1WU9RYTgiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.gMVjvzsIRnVc-xxGhpfzIce_DxMZ2C6j0IIZgoqrUY0' }
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setEmployees(result)
        })
        .catch(console.log)
    }, [])

return (
    <ScrollView>
            <View style={styles.container}>
              {employees.map((post, key) =>
              <View style={styles.item} key={key}>
                <Text  style={{ fontSize: 18, color: '#fff', fontWeight: "700", textDecorationLine: 'underline'}} onPress ={() => navigation.navigate('Profile')}>{post.employee.first_name} {post.employee.last_name}</Text>
              <View style={{paddingTop: 2, paddingBottom: 8}}>
                <Text style={{ fontSize: 18, color: theme.COLORS.WARNING, fontWeight: "700"}} onPress ={() => navigation.navigate('Profile')}>{post.employee.username}</Text>
              </View>
              </View>
              )}
            </View>
            </ScrollView>
        );
      }
      
      const styles = StyleSheet.create({
        container: { flex: 1, paddingTop: 30, backgroundColor: '#009387'},
        item: {flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, borderWidth: 1,  backgroundColor: '#50A450', borderColor: '#A3BCB6'}
      });

export default AllEmployees



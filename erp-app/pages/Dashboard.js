import React from 'react'
import { StatusBar, StyleSheet, View, ScrollView } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper';
import EmployeeProfile from './EmployeeProfile'
import KpiPage from './KpiPage'
import Reports from './Reports'

function Dashboard({navigation}) {
     return (
          <ScrollView style={styles.wrapper}>
            <View style={styles.container}>
           <Card style={styles.card} onPress ={() => navigation.navigate('All Employees')}>
            <Card.Content  style={styles.cardTop}>
              <Title style={styles.titleText}>All Employees</Title>
            </Card.Content>
          <Card.Cover source={require('../assets/all.png')} />
          </Card>
          <Card style={styles.card} onPress ={() => navigation.navigate('Reports')}>
           <Card.Content  style={styles.cardTop}>
             <Title style={styles.titleText}>Reports</Title>
           </Card.Content>
          <Card.Cover source={require('../assets/reports.png')} />
          </Card>
          <Card style={styles.card} onPress ={() => navigation.navigate('KPI')}>
           <Card.Content  style={styles.cardTop}>
             <Title style={styles.titleText}>KPI</Title>
           </Card.Content>
          <Card.Cover source={require('../assets/kpi.png')} />
          </Card>
          <Card style={styles.card} onPress ={() => navigation.navigate('KPI')}>
           <Card.Content  style={styles.cardTop}>
             <Title style={styles.titleText}>Teams</Title>
           </Card.Content>
          <Card.Cover source={require('../assets/teams.png')} />
          </Card>
          <Card style={styles.card} onPress ={() => navigation.navigate('KPI')}>
           <Card.Content  style={styles.cardTop}> 
             <Title style={styles.titleText}>Projects</Title>
           </Card.Content>
          <Card.Cover source={require('../assets/projects.png')} />
          </Card>
          </View>
        </ScrollView>
     )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 20,
    },
    wrapper:{
      backgroundColor: '#009387'
    },
    cardTop:{
      backgroundColor: '#50A450',
    },
     titleText: {
      textAlign: 'center',
      color: '#fff'
     },
     card:{
       marginBottom: 20
     }
   });

export default Dashboard

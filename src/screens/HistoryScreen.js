import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, Platform } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import api from '../services/api';

export default function HistoryScreen() {
  const [registros, setRegistros] = useState([]);

  useFocusEffect(
    useCallback(() => {
      carregarRegistros();
    }, [])
  );

  const carregarRegistros = async () => {
    try {
      const response = await api.get('/registros');
      setRegistros(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id) => {
    if (Platform.OS === 'web') {
      if (confirm('Excluir este registro?')) deleteItem(id);
    } else {
      Alert.alert('Excluir', 'Tem certeza?', [
        { text: 'Não' },
        { text: 'Sim', onPress: () => deleteItem(id) }
      ]);
    }
  };

  const deleteItem = async (id) => {
    await api.delete(`/registros/${id}`);
    carregarRegistros();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Histórico Completo</Text>
      
      <ScrollView contentContainerStyle={styles.listContent}>
        {registros.length === 0 ? (
          <Text style={{textAlign: 'center', color: '#A3AED0'}}>Nenhum registro encontrado.</Text>
        ) : (
          registros.map(item => (
            <View key={item.id} style={styles.listItem}>
              <View style={styles.itemLeft}>
                <View style={[styles.iconBox, 
                  item.tipo==='sono'?styles.iconBlue:item.tipo==='alimentacao'?styles.iconGreen:styles.iconOrange
                ]}>
                  <Text style={{fontSize: 20}}>
                    {item.tipo==='sono'?'💤':item.tipo==='alimentacao'?'🍎':'🏋️'}
                  </Text>
                </View>
                <View>
                  <Text style={styles.itemDesc}>{item.descricao}</Text>
                  <Text style={styles.itemSub}>{item.data || 'Hoje'}</Text>
                </View>
              </View>

              <View style={styles.itemRight}>
                <Text style={styles.itemValue}>{item.valor}</Text>
                <TouchableOpacity onPress={() => handleDelete(item.id)}>
                  <Text style={{fontSize:18, marginLeft: 10}}>🗑️</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F7FE', paddingTop: 20 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#2B3674', textAlign: 'center', marginBottom: 20 },
  listContent: { padding: 20, gap: 10, paddingBottom: 50 },
  listItem: { backgroundColor: 'white', padding: 15, borderRadius: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  itemLeft: { flexDirection: 'row', alignItems: 'center', gap: 15 },
  iconBox: { width: 45, height: 45, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  iconBlue: { backgroundColor: '#E9E3FF' },
  iconGreen: { backgroundColor: '#E6FFFA' },
  iconOrange: { backgroundColor: '#FFF7E6' },
  itemDesc: { fontWeight: 'bold', color: '#2B3674', fontSize: 16 },
  itemSub: { fontSize: 12, color: '#A3AED0' },
  itemRight: { flexDirection: 'row', alignItems: 'center' },
  itemValue: { fontSize: 18, fontWeight: 'bold', color: '#2B3674' },
});
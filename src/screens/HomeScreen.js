import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert, Platform } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'; 
import api from '../services/api';

export default function HomeScreen() {
  const [registros, setRegistros] = useState([]);
  const [form, setForm] = useState({ tipo: 'sono', descricao: '', valor: '' });

  
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
      console.log("Erro ao carregar");
    }
  };

  const handleSave = async () => {
    if (!form.descricao || !form.valor) return;
    try {
      await api.post('/registros', form);
      setForm({ tipo: 'sono', descricao: '', valor: '' });
      carregarRegistros();
      Alert.alert("Sucesso", "Registro adicionado!");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar.");
    }
  };

  // Cálculos
  const totalSono = registros.filter(r => r.tipo === 'sono').reduce((acc, curr) => acc + curr.valor, 0);
  const totalCalorias = registros.filter(r => r.tipo === 'alimentacao').reduce((acc, curr) => acc + curr.valor, 0);
  const totalExercicio = registros.filter(r => r.tipo === 'exercicio').reduce((acc, curr) => acc + curr.valor, 0);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.headerTitle}>Dashboard Saúde</Text>

     
      <View style={styles.cardsContainer}>
          <View style={[styles.card, styles.bgBlue]}>
            <Text style={styles.cardLabel}>SONO</Text>
            <Text style={styles.cardValue}>{totalSono}h</Text>
          </View>
          <View style={[styles.card, styles.bgGreen]}>
            <Text style={styles.cardLabel}>CALORIAS</Text>
            <Text style={styles.cardValue}>{totalCalorias}</Text>
          </View>
          <View style={[styles.card, styles.bgOrange]}>
            <Text style={styles.cardLabel}>EXERCÍCIOS</Text>
            <Text style={styles.cardValue}>{totalExercicio}m</Text>
          </View>
        
      </View>

    
      <View style={styles.sectionBox}>
        <Text style={styles.sectionTitle}>Novo Registro</Text>
        
        <View style={styles.typeSelector}>
          {['sono', 'alimentacao', 'exercicio'].map(type => (
            <TouchableOpacity 
              key={type}
              style={[styles.typeBtn, form.tipo === type && styles.typeBtnActive]}
              onPress={() => setForm({...form, tipo: type})}
            >
              <Text style={[styles.typeBtnText, form.tipo === type && styles.typeBtnTextActive]}>
                 {type === 'sono' ? 'Sono' : type === 'alimentacao' ? 'Dieta' : 'Treino'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TextInput 
          style={styles.input} 
          placeholder="Descrição (ex: Almoço)" 
          value={form.descricao}
          onChangeText={t => setForm({...form, descricao: t})}
        />
        
        <TextInput 
          style={styles.input} 
          placeholder="Valor (apenas números)" 
          keyboardType="numeric"
          value={form.valor}
          onChangeText={t => setForm({...form, valor: t})}
        />

        <TouchableOpacity style={styles.btnPrimary} onPress={handleSave}>
          <Text style={styles.btnText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F7FE' },
  content: { padding: 20, paddingBottom: 100 },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: '#2B3674', textAlign: 'center', marginVertical: 20 },

  cardsContainer: { marginBottom: 150, height: 140, gap: 15 },
  card: { width: "100%", height: 75, borderRadius: 20, padding: 20, justifyContent: 'center',display:'flex',flexDirection:'column', marginRight: 15 },
  bgBlue: { backgroundColor: '#4318FF' },
  bgGreen: { backgroundColor: '#05CD99' },
  bgOrange: { backgroundColor: '#FFB547' },
  cardLabel: { color: 'white', fontWeight: 'bold', fontSize: 12, opacity: 0.9 },
  cardValue: { color: 'white', fontWeight: 'bold', fontSize: 26, marginTop: 5 },


  sectionBox: { backgroundColor: 'white', borderRadius: 20, padding: 20, elevation: 2 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#2B3674', marginBottom: 15 },
  typeSelector: { flexDirection: 'row', marginBottom: 15, gap: 10 },
  typeBtn: { flex: 1, paddingVertical: 10, borderWidth: 1, borderColor: '#E0E5F2', borderRadius: 10, alignItems: 'center' },
  typeBtnActive: { backgroundColor: '#4318FF', borderColor: '#4318FF' },
  typeBtnText: { color: '#A3AED0', fontWeight: '600' },
  typeBtnTextActive: { color: 'white' },
  input: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#E0E5F2', borderRadius: 10, padding: 12, marginBottom: 10, fontSize: 16 },
  btnPrimary: { backgroundColor: '#4318FF', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 5 },
  btnText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});
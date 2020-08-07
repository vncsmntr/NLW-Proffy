import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input'
import Select from '../../components/Select';
import searchIcon from '../../assets/images/icons/search.svg';
import api from '../../services/api';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function searchProffy(e: FormEvent) {
    e.preventDefault();
    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    });

    setTeachers(response.data)
  }


  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">

      <form id="search-teacher" onSubmit={searchProffy}>
      
      <Select 
          name="subject" 
          label="Matéria"
          value={subject}
          onChange={(e) => {setSubject(e.target.value)}}
          options={[
            { value: 'Artes', label: 'Artes' },
            { value: 'Química', label: 'Química' },
            { value: 'Matemática', label: 'Matemática' },
            { value: 'Português', label: 'Português' },
            { value: 'Biologia', label: 'Biologia' },
            { value: 'Educação Física', label: 'Educação Física' },
            { value: 'Ciências', label: 'Ciências' },
            { value: 'Geografia', label: 'Geografia' },
            { value: 'Inglês', label: 'Inglês' },
            { value: 'História', label: 'História' },
            { value: 'Física', label: 'Física' }
          ]}
          />
          <Select 
          name="week_day" 
          label="Dia da semana"
          value={week_day}
          onChange={(e) => {setWeekDay(e.target.value)}} 
          options={[
            { value: '0', label: 'Domingo' },
            { value: '1', label: 'Segunda-Feira' },
            { value: '2', label: 'Terça-Feira' },
            { value: '3', label: 'Quarta-Feira' },
            { value: '4', label: 'Quinta-Feira' },
            { value: '5', label: 'Sexta-Feira' },
            { value: '6', label: 'Sábado' },
          ]}
          />
        <Input type="time" name="time" label="Hora" value={time} onChange={(e) => {setTime(e.target.value)}} />
        <button type="submit" >
          <img src={searchIcon} alt="Pesquisar"/>
          <span>
          Buscar
          </span>
        </button>
      </form>

      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher}/>
        })}
      </main>
    </div>
  );
}


export default TeacherList;
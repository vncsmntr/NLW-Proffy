import React from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input'
import Select from '../../components/Select';


function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">

      <form id="search-teacher">

      <Select 
          name="subject" 
          label="Matéria" 
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
        <Input type="time" name="time" label="Hora" />

      </form>

      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}


export default TeacherList;
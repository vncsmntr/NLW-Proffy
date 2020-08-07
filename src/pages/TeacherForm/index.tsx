import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import './styles.css';

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
      title="Que incrivel que você quer dar aulas!"
      description="O primeiro passo, é preencher esse
      formulário de inscrição."
      />

      <main>
        <fieldset>
          <legend>Seus Dados</legend>
          
          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="Link da sua foto" />
          <Input name="whatsapp" label="Whatsapp" />
          <Textarea name="bio" label="Biografia" />

        </fieldset>
        <fieldset>
        <legend>Sobre a aula</legend>
          
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
          <Input name="cost" label="Custo da sua hora por aula (em R$)" />

        </fieldset>
        <fieldset>
          <legend>
            Horarios disponíveis
            <button type="button">+ Novo Horário</button>
          </legend>
         <div className="schedule-item">
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
          <Input type="time" name="from" label="Das" />
          <Input type="time" name="to" label="Até" />
          </div>
        </fieldset>
          <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante"/>
            Importante <br/>
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
  </div>
  );
}


export default TeacherForm;
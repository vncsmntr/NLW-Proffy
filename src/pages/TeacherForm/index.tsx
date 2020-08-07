import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import './styles.css';
import api from '../../services/api';

function TeacherForm() {
  const history = useHistory();

  // CHAMADAS PARA API E HANDLE
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');
  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');
    
  // FUNÇÂO DE ESTADO
  const  [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ]);
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const updatedSchedule = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value};
      }
      return scheduleItem;
    });
    setScheduleItems(updatedSchedule);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();
    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems,
    }).then(() => {
      alert('Cadastro realizado com sucesso!');

      history.push('/');
    }).catch(() => {
      alert('Erro catastrófico no cadastro!')
    });
  }


  // HTML
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
      title="Que incrivel que você quer dar aulas!"
      description="O primeiro passo, é preencher esse
      formulário de inscrição."
      />

      <main>
        <form onSubmit={handleCreateClass}>
        <fieldset>
          <legend>Seus Dados</legend>
          
          <Input name="name" label="Nome Completo" value={name} onChange={(e) => { setName(e.target.value) }} />
          <Input name="avatar" label="Link da sua foto" value={avatar} onChange={(e) => { setAvatar(e.target.value) }} />
          <Input name="whatsapp" label="Whatsapp" value={whatsapp} onChange={(e) => { setWhatsapp(e.target.value) }} />
          <Textarea name="bio" label="Biografia" value={bio} onChange={(e) => { setBio(e.target.value) }} />

        </fieldset>
        <fieldset>
        <legend>Sobre a aula</legend>
          
          <Select 
          name="subject" 
          label="Matéria"
          value={subject}
          onChange={(e) => { setSubject(e.target.value )}} 
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
          <Input name="cost" label="Custo da sua hora por aula (em R$)" value={cost} onChange={(e) => { setCost(e.target.value) }} />

        </fieldset>
        <fieldset>
          <legend>
            Horarios disponíveis
            <button type="button" onClick={addNewScheduleItem}>+ Novo Horário</button>
          </legend>
         {scheduleItems.map((scheduleItem, index) => {
           return (
            <div key={scheduleItem.week_day} className="schedule-item">
            <Select 
            name="week_day" 
            label="Dia da semana"
            value={scheduleItem.week_day}
            onChange={(e) => setScheduleItemValue(index, 'week_day', e.target.value)} 
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
            <Input type="time" name="from" label="Das" value={scheduleItem.from} onChange={(e) => setScheduleItemValue(index, 'from', e.target.value)} />
            <Input type="time" name="to" label="Até" value={scheduleItem.to} onChange={(e) => setScheduleItemValue(index, 'to', e.target.value)} />
            </div>
           );
         })} 
        </fieldset>
          <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante"/>
            Importante <br/>
            Preencha todos os dados
          </p>
          <button type="submit">Salvar cadastro</button>
        </footer>
        </form>
      </main>
  </div>
  );
}


export default TeacherForm;
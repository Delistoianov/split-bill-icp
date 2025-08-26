import React, { useState, useEffect } from 'react';

type Group = {
  id: number;
  name: string;
  members: string[];
};

type AddExpenseModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (expense: { desc: string; amount: number; payer: string; participants: string[] }) => void;
  group: Group | null;
};

export default function AddExpenseModal({ isOpen, onClose, onSave, group }: AddExpenseModalProps) {
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const [payer, setPayer] = useState('');
  const [participants, setParticipants] = useState<string[]>([]);

  useEffect(() => {
    if (group?.members) {
      setPayer(group.members[0] || '');
      setParticipants(group.members);
    }
  }, [group]);

  if (!isOpen || !group) return null;

  const handleSave = () => {
    if (!desc || !amount || !payer || participants.length === 0) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    onSave({
      desc,
      amount: parseFloat(amount) * 100, // Armazenar como centavos
      payer,
      participants,
    });
    // Limpa o formulário e fecha o modal
    setDesc('');
    setAmount('');
    onClose();
  };

  const handleParticipantChange = (member: string) => {
    setParticipants(prev => 
      prev.includes(member) 
        ? prev.filter(p => p !== member) 
        : [...prev, member]
    );
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Adicionar Nova Despesa</h2>
          <button onClick={onClose} className="close-button">&times;</button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label htmlFor="desc">Descrição</label>
            <input
              id="desc"
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Ex: Carne para o churrasco"
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Valor (R$)</label>
            <input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Ex: 120.50"
            />
          </div>
          <div className="form-group">
            <label htmlFor="payer">Quem Pagou?</label>
            <select id="payer" value={payer} onChange={(e) => setPayer(e.target.value)}>
              {group.members.map(member => (
                <option key={member} value={member}>{member}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Para quem dividir?</label>
            <div className="participants-grid">
              {group.members.map(member => (
                <div key={member} className="participant-item">
                  <input
                    type="checkbox"
                    id={`participant-${member}`}
                    checked={participants.includes(member)}
                    onChange={() => handleParticipantChange(member)}
                  />
                  <label htmlFor={`participant-${member}`}>{member}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>Cancelar</button>
          <button className="btn" onClick={handleSave}>Salvar Despesa</button>
        </div>
      </div>
    </div>
  );
}

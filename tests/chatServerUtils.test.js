import { describe, it, expect } from 'vitest';
import { formatHistory, getSystemPrompt } from '../api/chatServerUtils.js';

const personajesMock = {
  brian: 'Sos Brian O\'Conner',
  toretto: 'Sos Dominic Toretto',
  roman: 'Sos Roman Pearce',
  tj: 'Sos Tej Parker'
};

// --- formatHistory ---
describe('formatHistory', () => {

  it('convierte el historial al formato de Gemini', () => {
    const history = [
      { role: 'user', text: 'Hola' },
      { role: 'model', text: 'Qué tal' }
    ];
    const result = formatHistory(history);
    expect(result).toEqual([
      { role: 'user', parts: [{ text: 'Hola' }] },
      { role: 'model', parts: [{ text: 'Qué tal' }] }
    ]);
  });

  it('devuelve array vacío si el historial está vacío', () => {
    expect(formatHistory([])).toEqual([]);
  });

  it('mantiene el role correctamente', () => {
    const history = [{ role: 'user', text: 'test' }];
    const result = formatHistory(history);
    expect(result[0].role).toBe('user');
  });

});

// --- getSystemPrompt ---
describe('getSystemPrompt', () => {

  it('devuelve el prompt del personaje correcto', () => {
    expect(getSystemPrompt('toretto', personajesMock)).toBe('Sos Dominic Toretto');
  });

  it('devuelve el prompt de brian por defecto si el personaje no existe', () => {
    expect(getSystemPrompt('desconocido', personajesMock)).toBe('Sos Brian O\'Conner');
  });

  it('devuelve brian si character es undefined', () => {
    expect(getSystemPrompt(undefined, personajesMock)).toBe('Sos Brian O\'Conner');
  });

});
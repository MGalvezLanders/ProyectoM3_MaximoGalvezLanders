import { describe, it, expect } from "vitest";
import { buildHistory, isValidMessage } from "../src/utils/chatUtils.js";

// --- isValidMessage ---
describe("isValidMessage", () => {
  it("devuelve true si el mensaje tiene texto", () => {
    expect(isValidMessage("Hola")).toBe(true);
  });

  it("devuelve false si el mensaje está vacío", () => {
    expect(isValidMessage("")).toBe(false);
  });

  it("devuelve false si el mensaje es solo espacios", () => {
    expect(isValidMessage("   ")).toBe(false);
  });
});

// --- buildHistory ---
describe("buildHistory", () => {
  it("agrega el mensaje del usuario y el del bot al historial", () => {
    const result = buildHistory([], "Hola", "Qué tal");
    expect(result).toEqual([
      { role: "user", text: "Hola" },
      { role: "model", text: "Qué tal" },
    ]);
  });

  it("mantiene el historial previo", () => {
    const prev = [
      { role: "user", text: "Mensaje anterior" },
      { role: "model", text: "Respuesta anterior" },
    ];
    const result = buildHistory(prev, "Nuevo", "Respuesta");
    expect(result).toHaveLength(4);
  });

  it("no muta el historial original", () => {
    const prev = [{ role: "user", text: "Hola" }];
    buildHistory(prev, "test", "respuesta");
    expect(prev).toHaveLength(1);
  });
});

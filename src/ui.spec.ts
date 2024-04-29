import { vi } from "vitest"
import {partida } from "./modelo";
import {ganarOPerder, gestionarPartida } from "./ui"

describe(gestionarPartida, () => {
    it("Deberia poner ¡ Lo has clavado! ¡Enhorabuena! en el HTML en caso de que la puntuacion sea 7,5", () => {
    // Arrange
    vi.spyOn(partida, "puntuacion" ,"get").mockReturnValue(7.5)
    const resultadoEsperado = "¡ Lo has clavado! ¡Enhorabuena!"
    // Act
    const resultado = ganarOPerder()
    // Assert
    expect(resultado).toBe(resultadoEsperado);
    })
})
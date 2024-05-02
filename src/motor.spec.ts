import {vi} from "vitest"
import {partida, estadoPartida} from "./modelo";
import * as motor from "./motor";
import { ganarOPerder } from "./ui";


describe("comprobarVictoria", () => {
    it("Deberia devolver Has_Ganado en caso de que la puntuacion sea 7,5", () => {
    // Arrange
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(7.5)
    const resultadoEsperado : estadoPartida = "Has_Ganado"
    // Act
    const resultado = motor.condicionGanarOPerder()
    // Assert
    expect(resultado).toBe(resultadoEsperado)
    })

    it("Deberia devolver ¡ Lo has clavado! ¡Enhorabuena! en caso de que el estado sea Has_Ganado", () => {
        // Arrange
        vi.spyOn(motor, "condicionGanarOPerder").mockReturnValue("Has_Ganado")
        const resultadoEsperado = "¡ Lo has clavado! ¡Enhorabuena!"
        // Act
        motor.condicionGanarOPerder()
        const resultado : string = ganarOPerder(motor.condicionGanarOPerder())
        // Assert
        expect(resultado).toBe(resultadoEsperado)
    })
})
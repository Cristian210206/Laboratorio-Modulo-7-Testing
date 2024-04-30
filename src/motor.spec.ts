import {vi} from "vitest"
import {partida, estadoPartida} from "./modelo";
import { condicionGanarOPerder } from "./motor";
import { ganarOPerder } from "./ui";


describe(ganarOPerder(condicionGanarOPerder()), () => {
    it("Deberia devolver Has_Ganado en caso de que la puntuacion sea 7,5", () => {
    // Arrange
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(7.5)
    const resultadoEsperado : estadoPartida = "Has_Ganado" 
    // Act
    const resultado : estadoPartida = condicionGanarOPerder()
    // Assert
    expect(resultado).toBe(resultadoEsperado)
    })
})
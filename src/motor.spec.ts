import {vi} from "vitest"
import {partida, estadoPartida} from "./modelo";
import { condicionGanarOPerder, dameNumeroCarta, damePuntuacion} from "./motor";


describe("comprobarPartida", () => {
    it("Deberia devolver Has_Ganado en caso de que la puntuacion sea 7,5", () => {
    // Arrange
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(7.5)
    const resultadoEsperado : estadoPartida = "Has_Ganado"
    // Act
    const resultado = condicionGanarOPerder()
    // Assert
    expect(resultado).toBe(resultadoEsperado)
    })

    it("Deberia devolver Has_Perdido en caso de que la puntuacion sea mayor a 7.5", () => {
        // Arrange
        vi.spyOn(partida, "puntuacion", "get").mockReturnValue(8)
        const resultadoEsperado :estadoPartida = "Has_Perdido" 
        // Act
        const resultado :estadoPartida = condicionGanarOPerder()
        // Assert
        expect(resultado).toBe(resultadoEsperado)
    })

    it("Deberia devolver Aun_No_Has_Acabado en caso de que la puntuacion sea menor a 7.5", () => {
        // Arrange
        vi.spyOn(partida, "puntuacion", "get").mockReturnValue(7)
        const resultadoEsperado : estadoPartida = "Aun_No_Has_Acabado" 
        // Act
        const resultado : estadoPartida = condicionGanarOPerder()
        // Assert
        expect(resultado).toBe(resultadoEsperado)
    })
})


describe("comprobarNumeroAleatorio", () => {
    it("Deberia sumar 2 al numero en caso de que el numero sea mayor a 7", () => {
        // Arrange
        const numeroRandom : number = 8
        const resultadoEsperado = 10
        // Act
        const resultado = dameNumeroCarta(numeroRandom)
        // Assert
        expect(resultado).toBe(resultadoEsperado)
    })

    it("Nos deberia devolver el valor normal ya que el numero es 7 o menor", () => {
        // Arrange
        const numeroRandom : number = 7
        const resultadoEsperado = 7
        // Act
        const resultado = dameNumeroCarta(numeroRandom)
        // Assert
        expect(resultado).toBe(resultadoEsperado)
    })
})

describe("comprobarValores", () => {
    it("Nos deberia dar una puntuacion de 0.5 en caso de que la carta sea mayor que 7", () => {
        // Arrange
        vi.spyOn(partida, "puntuacion", "get").mockReturnValue(0)
        const numeroCarta : number = 10
        const resultadoEsperado = 0.5
        // Act
        const resultado = damePuntuacion(numeroCarta)
        // Assert
        expect(resultado).toBe(resultadoEsperado)

    })

    it("Nos deberia dar una puntuacion igual al numero de carta en caso de que la carta sea menor o igual a 7", () => {
        // Arrange
        vi.spyOn(partida, "puntuacion", "get").mockReturnValue(0)
        const numeroCarta : number = 7
        const resultadoEsperado = 7
        // Act
        const resultado = damePuntuacion(numeroCarta)
        // Assert
        expect(resultado).toBe(resultadoEsperado)

    })
})
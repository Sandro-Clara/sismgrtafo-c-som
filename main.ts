basic.forever(function () {
    // Mantém o gráfico de barras na tela
    led.plotBarGraph(
    input.acceleration(Dimension.Strength) - 1023,
    0,
    true
    )
    // Toca o som direto: a frequência muda em tempo real com a aceleração
    // Somente toca se a aceleração for maior que 1073 (evita o barulho com a placa parada)
    if (input.acceleration(Dimension.Strength) > 1073) {
        music.playTone(input.acceleration(Dimension.Strength) - 800, music.beat(BeatFraction.Sixteenth))
    }
})

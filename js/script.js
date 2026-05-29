// === MÓDULO 1: SIMULACIÓN DE ESCALADO DE ORO (FIBONACCI) ===
function simularEscaladoOro() {
    let oroTotal = parseInt(document.getElementById("inputFondosOro").value);
    let panelTexto = document.getElementById("pantallaResultadoOro");

    let valA = 0;
    let valB = 1;
    let valC;
    let costoAcumuladoItems = 0;
    let itemsComprados = 0;
    let registroPasos = "📋 AUDITORÍA DE FACTURACIÓN INTERNA:\n\n";

    for (let ciclo = 1; ciclo <= 50; ciclo++) {
        valC = valA + valB;
        valA = valB;
        valB = valC;

        if (costoAcumuladoItems + valA > oroTotal) {
            registroPasos += `❌ Mejoras N° ${ciclo}: Requiere Gold: ${valA} | ¡Fondos insuficientes en inventario!\n`;
            break;
        }

        costoAcumuladoItems += valA;
        itemsComprados++;
        registroPasos += `🛡️ Adquisición N° ${ciclo} OK ➔ Costo: Gold ${valA} | Balance Consumido: Gold ${costoAcumuladoItems}\n`;
    }

    let sobranteOro = oroTotal - costoAcumuladoItems;
    
    panelTexto.innerHTML = `🏆 RESUMEN COMPLETO DE LA SIMULACIÓN:
--------------------------------------------------
• Total de mejoras financiadas: ${itemsComprados} ítems equipados.
• Costo neto de la build en oro: Gold ${costoAcumuladoItems}.
• Remanente de seguridad en caja: Gold ${sobranteOro}.

==================================================
${registroPasos}`;
}

// === MÓDULO 2: VERIFICACIÓN CRYPTO ANTI-HACK (PRIMOS) ===
function procesarAuditoriaToken() {
    let codigoPin = parseInt(document.getElementById("inputPinSeguridad").value);
    let panelTexto = document.getElementById("pantallaResultadoPin");

    if (codigoPin <= 1) {
        panelTexto.innerHTML = "❌ STATUS SERVER: CÓDIGO INVÁLIDO\nLos valores iguales o menores a 1 no cumplen las condiciones aritméticas de la regla de primalidad.";
        return;
    }

    let divisoresEncontrados = 0;
    for (let divisor = 1; divisor <= codigoPin; divisor++) {
        if (codigoPin % divisor === 0) {
            divisoresEncontrados++;
        }
    }

    if (divisoresEncontrados === 2) {
        panelTexto.innerHTML = `🔓 STATUS SERVER: CLAVE CERTIFICADA (Estructura Fuerte)
--------------------------------------------------
El identificador numérico ${codigoPin} es perfectamente PRIMO. 
Registra únicamente dos divisores exactos en sistema (1 y ${codigoPin}). Token blindado contra fuerza bruta.`;
    } else {
        panelTexto.innerHTML = `🚨 STATUS SERVER: VULNERABILIDAD DETECTADA (Estructura Débil)
--------------------------------------------------
El número de acceso ${codigoPin} NO es primo. Se localizaron ${divisoresEncontrados} divisores analíticos.
Estructura compuesta predecible mediante algoritmos de descifrado simple.`;
    }
}

// === MÓDULO 3: RADAR DE SELECCIÓN MVP (COMBINADO) ===
function iniciarFiltroRadarMVP() {
    let rangoMaximoInput = parseInt(document.getElementById("inputRangoFiltro").value);
    let panelTexto = document.getElementById("pantallaResultadoRadar");

    let valA = 0;
    let valB = 1;
    let valC;
    let reporteRadar = "🛰️ ACTIVANDO MUESTREO DE DATOS EN LA RED COMPETITIVA...\n==================================================\n";
    let contadoresMVP = 0;

    for (let i = 1; i <= rangoMaximoInput; i++) {
        valC = valA + valB;
        valA = valB;
        valB = valC;

        let verificadorPrimo = true;
        if (valA <= 1) {
            verificadorPrimo = false;
        } else {
            for (let prueba = 2; prueba < valA; prueba++) {
                if (valA % prueba === 0) {
                    verificadorPrimo = false;
                    break;
                }
            }
        }

        if (verificadorPrimo) {
            reporteRadar += `🌟 ID Jugador: ${valA} ➔ [DETECCIÓN: PERFIL MVP CONFIRMADO] ✅\n`;
            contadoresMVP++;
        } else {
            reporteRadar += `   ID Jugador: ${valA} ➔ [Perfil Estándar - Descartando métricas...]\n`;
        }
    }

    reporteRadar += `\n==================================================\n🎯 DIAGNÓSTICO DEL SENSOR: Se aislaron con éxito ${contadoresMVP} perfiles de rendimiento sobresaliente (MVP) en el espectro configurado.`;
    panelTexto.innerText = reporteRadar;
}
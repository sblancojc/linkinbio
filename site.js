/* Keep the current page's tab visible in the scrolling tab bar */
(function(){var a=document.querySelector('.navbtn.active');if(a){var bar=a.parentNode;if(bar.scrollWidth>bar.clientWidth){bar.scrollLeft=Math.max(0,a.offsetLeft-24);}}})();
/* Susan Blanco site scripts (shared by every page) */

/* ---------- ENGLISH / SPANISH TOGGLE ----------
   English text stays in the HTML. Spanish lives in ES below, keyed by the English text.
   To edit a Spanish line, change its value here. Form answers are still sent to Formspree
   in English, plus a "Language" field showing which version the lead used. */
(function () {
  var ES = {
"Call/Text": "Llamar",
"Get Started": "Comenzar",
"Relocating to Utah": "Mudarse a Utah",
"First-Time Buyers": "Primera Vivienda",
"Sell & Move Up": "Vender y Cambiar de Casa",
"Neighborhood Quiz": "Quiz de Vecindarios",
"Welcome to": "Bienvenidos a",
"Your Family's Next Chapter Starts in Utah": "El Próximo Capítulo de Su Familia Comienza en Utah",
"Four real seasons. Mountains out every window. A slower pace without giving up great food, good schools, or things to do. Let's find the home where your family can finally settle in.": "Cuatro estaciones de verdad. Montañas desde cada ventana. Un ritmo más tranquilo sin renunciar a buena comida, a buenas escuelas ni a cosas que hacer. Encontremos el hogar donde su familia por fin pueda echar raíces.",
"Start the Conversation": "Empecemos a Conversar",
"Why Families Are Moving Here": "Por Qué las Familias se Mudan Aquí",
"Take the Neighborhood Quiz": "Haga el Quiz de Vecindarios",
"What Families Find Here": "Lo Que las Familias Encuentran Aquí",
"Four Real Seasons": "Cuatro Estaciones de Verdad",
"Trade endless heat for crisp autumns, snowy winters, blooming springs, and warm — not scorching — summers.": "Cambie el calor interminable por otoños frescos, inviernos con nieve, primaveras en flor y veranos cálidos, no abrasadores.",
"Mountains, Minutes Away": "Montañas a Minutos",
"Skiing, hiking, and canyon drives aren't a vacation here — they're a Tuesday afternoon.": "Esquiar, caminar por senderos y recorrer los cañones no son unas vacaciones aquí. Son un martes por la tarde.",
"Safer Streets, Better Schools": "Calles Más Seguras, Mejores Escuelas",
"Family-friendly neighborhoods built around good schools and a real sense of community.": "Vecindarios familiares, con buenas escuelas y un verdadero sentido de comunidad.",
"More Home for Your Money": "Más Casa por Su Dinero",
"Bigger kitchens, bigger backyards, more room to grow — including space for the dog.": "Cocinas más grandes, patios más grandes y más espacio para crecer, incluso para el perro.",
"For First-Time Buyers": "Para Compradores de Primera Vivienda",
"First-Time Home Buyer in Lehi & Salt Lake City, Utah": "Compre Su Primera Casa en Lehi y Salt Lake City, Utah",
"Short Answer": "Respuesta Corta",
"How do I buy my first home in Utah? Start with a lender pre-approval, decide how much to put down, then tour homes with a Realtor under a written buyer representation agreement. After your offer is accepted, the inspection, appraisal, and closing typically take about 30 to 45 days. I walk first-time buyers through each step so nothing feels like a surprise.": "<strong>¿Cómo compro mi primera casa en Utah?</strong> Empiece con una preaprobación de un prestamista, decida cuánto dar de pago inicial y luego visite casas con una agente de bienes raíces bajo un contrato escrito de representación del comprador. Una vez aceptada su oferta, la inspección, el avalúo y el cierre suelen tomar entre 30 y 45 días. Acompaño a los compradores primerizos en cada paso para que nada sea una sorpresa.",
"Minimum Down Payment by Loan Type": "Pago Inicial Mínimo por Tipo de Préstamo",
"Conventional 97": "Convencional 97",
"VA (eligible veterans)": "VA (veteranos elegibles)",
"Program minimums shown. Your lender confirms what you qualify for based on your credit, income, and the home.": "Se muestran los mínimos de cada programa. Su prestamista confirma para qué califica según su crédito, sus ingresos y la casa.",
"First-Time Buyer Questions": "Preguntas de Compradores Primerizos",
"How much down payment do first-time buyers need in Utah?": "¿Cuánto pago inicial necesitan los compradores primerizos en Utah?",
"Often much less than 20%. Conventional 97 loans start at 3% down, FHA loans at 3.5%, and VA loans can be 0% down for eligible veterans and service members. Your lender confirms the minimum for your credit, income, and the home you choose.": "Con frecuencia mucho menos del 20%. Los préstamos Convencional 97 empiezan con 3% de pago inicial, los FHA con 3.5% y los VA pueden ser con 0% para veteranos y miembros del servicio militar elegibles. Su prestamista confirma el mínimo según su crédito, sus ingresos y la casa que elija.",
"Does Utah have first-time home buyer assistance programs?": "¿Utah tiene programas de ayuda para compradores de primera vivienda?",
"Yes. Utah Housing Corporation offers FirstHome loans for first-time buyers, plus down payment assistance as a second mortgage of up to 6% of the loan amount for qualifying buyers. Income limits and minimum credit scores apply, so these programs won't fit every purchase price or budget. Confirm current terms with a participating lender.": "Sí. Utah Housing Corporation ofrece préstamos FirstHome para compradores de primera vivienda, además de ayuda para el pago inicial en forma de segunda hipoteca de hasta el 6% del monto del préstamo para quienes califiquen. Hay límites de ingresos y puntajes de crédito mínimos, así que estos programas no se ajustan a todos los precios o presupuestos. Confirme las condiciones actuales con un prestamista participante.",
"Do I need to sign a buyer representation agreement?": "¿Necesito firmar un contrato de representación del comprador?",
"Usually, yes. Since the 2024 NAR settlement changes, buyers typically sign a written agreement before touring homes with an agent. It spells out the services I provide and how I'm compensated, and compensation is negotiable, so everything is clear up front.": "Por lo general, sí. Desde los cambios del acuerdo de NAR en 2024, los compradores normalmente firman un contrato escrito antes de visitar casas con un agente. En él se detallan los servicios que ofrezco y cómo se me compensa. La compensación es negociable, así que todo queda claro desde el principio.",
"How long does it take to buy a first home?": "¿Cuánto tiempo toma comprar una primera casa?",
"Search time varies with your budget and the neighborhoods you choose. Once an offer is accepted, closing typically takes about 30 to 45 days. Getting pre-approved before you tour homes is the best way to keep the process moving.": "El tiempo de búsqueda depende de su presupuesto y de los vecindarios que elija. Una vez aceptada la oferta, el cierre suele tomar entre 30 y 45 días. Obtener la preaprobación antes de visitar casas es la mejor manera de mantener el proceso en marcha.",
"Can I buy my first home in Utah if I'm moving from out of state?": "¿Puedo comprar mi primera casa en Utah si me mudo desde otro estado?",
"Yes. Many of my clients relocate from California, Arizona, or overseas. We can start with a pre-approval and video tours, then plan a 3 to 4 day visit to tour homes, neighborhoods, and schools in person before you commit.": "Sí. Muchos de mis clientes se mudan desde California, Arizona o el extranjero. Podemos empezar con una preaprobación y recorridos por video, y luego planear una visita de 3 a 4 días para conocer casas, vecindarios y escuelas en persona antes de decidir.",
"General information only, not financial, legal, or tax advice. Loan programs and requirements change; confirm current terms with a licensed lender.": "Información general solamente, no es asesoría financiera, legal ni fiscal. Los programas y requisitos de préstamos cambian; confirme las condiciones actuales con un prestamista con licencia.",
"Start My First-Home Plan": "Empezar Mi Plan de Primera Casa",
"Free 30-minute consultation — no pressure.": "Consulta gratuita de 30 minutos, sin presión.",
"For Sellers Moving Up": "Para Quienes Venden y Buscan Algo Más Grande",
"Sell Your Home & Move Up in Lehi & Salt Lake City, Utah": "Venda Su Casa y Múdese a Algo Más Grande en Lehi y Salt Lake City, Utah",
"How do I sell my home and buy a bigger one in Utah? Start with what your home is worth and how much equity you'll have, then choose the order: sell first, buy first, or make a contingent offer. I prep and price your home, line up your next purchase, and coordinate both closings so your sale funds your next home and you move straight from one to the other.": "<strong>¿Cómo vendo mi casa y compro una más grande en Utah?</strong> Empiece por saber cuánto vale su casa y cuánto capital tendrá, y luego elija el orden: vender primero, comprar primero o hacer una oferta contingente. Preparo y pongo precio a su casa, organizo su próxima compra y coordino ambos cierres para que la venta financie su próxima casa y pase directamente de una a la otra.",
"Your Sell & Move-Up Game Plan": "Su Plan para Vender y Cambiar de Casa",
"1. Know Your Value": "1. Conozca Su Valor",
"A free home-value review built on recent nearby sales, not just an automated estimate.": "Una evaluación gratuita del valor de su casa basada en ventas recientes cercanas, no solo en un cálculo automático.",
"2. Prep & Price": "2. Prepare y Fije el Precio",
"Smart touch-ups, staging, and pricing that bring in strong offers.": "Arreglos inteligentes, preparación visual y un precio que atraiga ofertas fuertes.",
"3. Sync Your Move": "3. Sincronice Su Mudanza",
"Your sale and next purchase planned together so closing dates line up.": "Su venta y su próxima compra planeadas juntas para que las fechas de cierre coincidan.",
"Sell & Move-Up Questions": "Preguntas para Vender y Cambiar de Casa",
"How much is my home worth?": "¿Cuánto vale mi casa?",
"The most dependable estimate comes from recent sales of similar homes near yours, adjusted for condition, updates, lot, and views. Online estimates are a useful starting point, but they can miss what makes your home different. I'll walk through your home and prepare a free value review so you can see what buyers are likely to pay.": "La estimación más confiable viene de ventas recientes de casas similares cerca de la suya, ajustadas por condición, mejoras, terreno y vistas. Las estimaciones en línea son un buen punto de partida, pero pueden pasar por alto lo que hace diferente a su casa. Recorreré su casa y prepararé una evaluación gratuita para que vea lo que probablemente pagarían los compradores.",
"When is the best time to sell a house in Utah?": "¿Cuál es la mejor época para vender una casa en Utah?",
"Spring and early summer are often busy, with more buyers shopping, but the best time depends on your home, your price range, and current local conditions. If you're also buying, your own timeline matters as much as the season. We'll look at recent activity in your neighborhood before choosing a list date.": "La primavera y el inicio del verano suelen ser muy activos, con más compradores buscando, pero la mejor época depende de su casa, su rango de precio y las condiciones locales del momento. Si también va a comprar, su propio calendario importa tanto como la temporada. Revisaremos la actividad reciente en su vecindario antes de elegir la fecha para publicar.",
"Should I sell my house first or buy first?": "¿Debo vender mi casa primero o comprar primero?",
"It depends on your equity, cash reserves, how quickly homes sell in your area, and how much risk you're comfortable with. Selling first gives you clean numbers and stronger offers; buying first lets you move once but needs financing for the overlap. We'll compare both against your numbers before you list or make an offer.": "Depende de su capital, sus reservas de efectivo, qué tan rápido se venden las casas en su zona y cuánto riesgo está dispuesto a asumir. Vender primero le da números claros y ofertas más fuertes; comprar primero le permite mudarse una sola vez, pero necesita financiamiento para el periodo en que tenga ambas casas. Compararemos las dos opciones con sus números antes de publicar o hacer una oferta.",
"What should I fix or stage before listing?": "¿Qué debo arreglar o preparar antes de publicar?",
"Focus on what buyers notice first: decluttering, deep cleaning, fresh paint, curb appeal, and anything likely to come up in an inspection. Big remodels don't always pay back right before a sale. I'll give you a short priority list for your home and your budget.": "Concéntrese en lo que los compradores notan primero: despejar, limpiar a fondo, pintura fresca, buena impresión desde la calle y cualquier cosa que probablemente salga en una inspección. Las remodelaciones grandes no siempre se recuperan justo antes de vender. Le daré una lista corta de prioridades para su casa y su presupuesto.",
"What does it cost to sell a house?": "¿Cuánto cuesta vender una casa?",
"Typical costs include agent compensation, title and escrow fees, any prep or repairs, and your loan payoff and prorated taxes. The amounts vary by home and by agreement, so I'll give you a written net-proceeds estimate before you list, and you'll see what you'd walk away with.": "Los costos típicos incluyen la compensación del agente, los cargos de título y escrow, cualquier preparación o reparación, el pago de su préstamo y los impuestos prorrateados. Los montos varían según la casa y el acuerdo, así que antes de publicar le daré por escrito una estimación de ganancias netas para que vea con cuánto se quedaría.",
"Will I owe taxes when I sell my home?": "¿Pagaré impuestos al vender mi casa?",
"Many homeowners can exclude part of the gain on a primary residence they've owned and lived in for at least two of the last five years, but limits and rules vary. Check with a tax professional before you list so you can plan your next purchase with confidence.": "Muchos propietarios pueden excluir parte de la ganancia de una residencia principal que han tenido y habitado por al menos dos de los últimos cinco años, pero los límites y las reglas varían. Consulte con un profesional de impuestos antes de publicar para planear su próxima compra con confianza.",
"General information only, not financial, legal, or tax advice. Costs, timing, and tax rules vary; confirm details with a licensed lender and tax professional.": "Información general solamente, no es asesoría financiera, legal ni fiscal. Los costos, los tiempos y las reglas fiscales varían; confirme los detalles con un prestamista con licencia y un profesional de impuestos.",
"Get My Home Value & Plan": "Obtener el Valor de Mi Casa y Mi Plan",
"Get to Know": "Conozca",
"Lehi & Salt Lake City": "Lehi y Salt Lake City",
"Perfectly in between — close to the mountains, the outlets, the trails, and the parks, with easy access to Salt Lake City, Provo, and the airport whenever family comes to visit (or you head back to see them).": "Perfectamente en medio de todo: cerca de las montañas, los outlets, los senderos y los parques, con fácil acceso a Salt Lake City, Provo y el aeropuerto cada vez que la familia venga de visita (o cuando usted vaya a verlos).",
"Min to Salt Lake City": "Min a Salt Lake City",
"Min to Provo": "Min a Provo",
"Ski Resorts Nearby": "Centros de Esquí Cercanos",
"The Next Move Is Yours!": "¡El Próximo Paso Es Suyo!",
"Hi, I'm Susan Blanco — a Realtor with Real Broker and The Perry Group here in Utah. My own family is multicultural, so I understand what it means to search for a place where everyone truly belongs. I treat every client like family: honest advice, a plan you can trust, and someone in your corner from the first showing to closing day. Whether you're coming from California, Arizona, another state, or another country, I'll help make your move to Utah feel like coming home.": "Hola, soy Susan Blanco, agente de bienes raíces con Real Broker y The Perry Group aquí en Utah. Mi propia familia es multicultural, así que entiendo lo que significa buscar un lugar donde todos realmente pertenezcan. Trato a cada cliente como familia: consejos honestos, un plan en el que puede confiar y alguien de su lado desde la primera visita hasta el día del cierre. Ya sea que venga de California, Arizona, otro estado u otro país, le ayudaré a que su mudanza a Utah se sienta como llegar a casa.",
"Susan Blanco, Realtor · Real Broker, LLC · The Perry Group License #6217613-SA00 · 801-919-5183 · susanblancorealtor@gmail.com": "<strong>Susan Blanco</strong>, Agente de Bienes Raíces &middot; Real Broker, LLC &middot; The Perry Group<br>Licencia #6217613-SA00 &middot; 801-919-5183 &middot; susanblancorealtor@gmail.com",
"Here's What Happens Next": "Esto Es Lo Que Sigue",
"After You Reach Out": "Después de Contactarme",
"Send Your Info": "Envíe Su Información",
"Fill out the quick form below — it takes about a minute.": "Llene el formulario rápido de abajo. Toma alrededor de un minuto.",
"Susan Calls or Texts You": "Susan Le Llama o Le Escribe",
"Usually within 24 hours, to talk through what you're looking for and answer your Utah questions.": "Por lo general en menos de 24 horas, para hablar de lo que busca y responder sus preguntas sobre Utah.",
"Get Your Custom Utah Plan": "Reciba Su Plan Personalizado para Utah",
"Neighborhoods, homes, and a timeline built around your family — no pressure, just a plan.": "Vecindarios, casas y un calendario pensados para su familia. Sin presión, solo un plan.",
"Let's Talk": "Hablemos",
"Tell Me About Your Move": "Cuénteme Sobre Su Mudanza",
"A few quick taps — no long forms. I follow up personally, usually within 24 hours.": "Unos cuantos toques, sin formularios largos. Le doy seguimiento personalmente, por lo general en menos de 24 horas.",
"Full Name": "Nombre Completo",
"Phone": "Teléfono",
"Email": "Correo Electrónico",
"I'm Interested In": "Me Interesa",
"Buying a Home": "Comprar una Casa",
"Selling a Home": "Vender una Casa",
"Buying & Selling": "Comprar y Vender",
"Just Exploring Utah": "Solo Explorando Utah",
"My Timeline": "Mi Calendario",
"Ready Now (0–3 mo)": "Ahora Mismo (0 a 3 meses)",
"Soon (3–6 mo)": "Pronto (3 a 6 meses)",
"This Year (6–12 mo)": "Este Año (6 a 12 meses)",
"Just Starting to Look": "Apenas Empezando a Buscar",
"Moving From": "Me Mudo Desde",
"Select one": "Seleccione una opción",
"Overseas": "El extranjero",
"Another US State": "Otro estado de EE. UU.",
"I'm already in Utah": "Ya estoy en Utah",
"Budget Range": "Rango de Presupuesto",
"Where should my family live in Utah?": "¿Dónde debería vivir mi familia en Utah?",
"It depends on your commute, your schools, and how you spend your weekends. Many of my relocation families start around Lehi and Draper because they sit right between Salt Lake and Utah counties, close to the mountains, the trails, and the airport. Take my neighborhood quiz, then we'll narrow it to two or three areas to compare side by side.": "Depende de su trayecto al trabajo, las escuelas y cómo pasa sus fines de semana. Muchas de las familias que ayudo a mudarse empiezan por Lehi y Draper, porque están justo entre los condados de Salt Lake y Utah, cerca de las montañas, los senderos y el aeropuerto. Haga mi quiz de vecindarios y luego reduciremos la lista a dos o tres zonas para compararlas.",
"Will we really get more house for our money than in California?": "¿De verdad obtendremos más casa por nuestro dinero que en California?",
"For many families coming from coastal California, yes. You often get more space, a bigger yard, and mountain views for a similar budget. Prices vary a lot by city and neighborhood, so I'll send you current numbers for the exact areas you're considering before you decide anything.": "Para muchas familias que vienen de la costa de California, sí. Con un presupuesto similar suele obtener más espacio, un patio más grande y vista a las montañas. Los precios varían mucho según la ciudad y el vecindario, así que le enviaré números actuales de las zonas exactas que le interesan antes de que decida nada.",
"Can we start the process before we move here?": "¿Podemos empezar el proceso antes de mudarnos?",
"Absolutely. We can start with a lender pre-approval, video calls, and live video tours while you're still in California, Arizona, or overseas. Most families plan one 3 to 4 day visit to see homes and neighborhoods in person, and I coordinate the rest with your lender and title company.": "Claro que sí. Podemos empezar con la preaprobación de un prestamista, videollamadas y recorridos en vivo por video mientras usted sigue en California, Arizona o el extranjero. La mayoría de las familias planean una visita de 3 a 4 días para ver casas y vecindarios en persona, y yo coordino lo demás con su prestamista y la compañía de título.",
"Will my family fit in if we're not members of the LDS Church?": "¿Mi familia encajará si no somos miembros de la Iglesia SUD?",
"This is one of the most common questions I get, and it's a fair one. Utah is home to people of many faiths, cultures, and backgrounds, and my own family is multicultural. Families build community through school, sports, work, faith groups of all kinds, and neighborhood events. I don't describe neighborhoods by religion, but I'm happy to share local groups and resources so you feel at home quickly.": "Es una de las preguntas que más me hacen, y es muy válida. En Utah viven personas de muchas religiones, culturas y orígenes, y mi propia familia es multicultural. Las familias forman comunidad a través de la escuela, los deportes, el trabajo, grupos de fe de todo tipo y eventos del vecindario. No describo los vecindarios por religión, pero con gusto le comparto grupos y recursos locales para que se sienta en casa pronto.",
"What if we choose the wrong area and have to move again?": "¿Y si elegimos la zona equivocada y tenemos que mudarnos otra vez?",
"That's exactly what we plan to avoid. Before you commit, we test the commute at the times you'd actually drive, visit the schools and parks, and walk the neighborhoods. I'll also tell you what I'd want to know if it were my own family moving.": "Eso es justo lo que planeamos evitar. Antes de decidir, probamos el trayecto a las horas en que usted realmente manejaría, visitamos las escuelas y los parques y recorremos los vecindarios a pie. También le diré lo que yo querría saber si fuera mi propia familia la que se muda.",
"We don't know anyone in Utah. Where do we start?": "No conocemos a nadie en Utah. ¿Por dónde empezamos?",
"You won't be doing it alone. I've made big moves myself, so I know how it feels to start over. I'll share my list of trusted lenders, inspectors, and movers, plus my favorite local spots for coffee, food, and family weekends, so Utah feels like home faster.": "No lo hará solo. Yo también he hecho mudanzas grandes, así que sé lo que se siente empezar de nuevo. Le compartiré mi lista de prestamistas, inspectores y empresas de mudanza de confianza, además de mis lugares favoritos para café, comida y fines de semana en familia, para que Utah se sienta como su hogar más rápido.",
"How cold are the winters?": "¿Qué tan fríos son los inviernos?",
"You get real winters, with snow that makes the mountains beautiful and the ski season great. In the valley, snow usually melts within a few days and the main roads are plowed quickly. Most families tell me the four seasons, especially fall and spring, are one of their favorite parts of living here.": "Aquí hay inviernos de verdad, con nieve que hace que las montañas se vean preciosas y una gran temporada de esquí. En el valle, la nieve normalmente se derrite en pocos días y las calles principales se limpian rápido. La mayoría de las familias me dicen que las cuatro estaciones, sobre todo el otoño y la primavera, son una de sus partes favoritas de vivir aquí.",
"We're a year away. Is it too early to reach out?": "Nos falta un año. ¿Es muy pronto para contactarla?",
"Not at all. The families who start early have the smoothest moves. We can map out timing, budget, and neighborhoods now, so when you're ready, you can move quickly with confidence.": "Para nada. Las familias que empiezan temprano tienen las mudanzas más tranquilas. Podemos planear los tiempos, el presupuesto y los vecindarios desde ahora, para que cuando esté listo pueda avanzar rápido y con confianza.",
"Ask Me Anything": "Pregúnteme Lo Que Sea",
"Questions People Ask Me": "Preguntas Que Me Hacen",
"The real questions families ask me before a move to Utah, answered straight.": "Las preguntas reales que me hacen las familias antes de mudarse a Utah, con respuestas claras.",
"Moving to Utah Questions": "Preguntas Sobre Mudarse a Utah",
"Got a question that isn't here? Call or text me at 801-919-5183, I answer those myself, or book 30 minutes straight on my calendar.": "<strong>¿Tiene una pregunta que no está aquí?</strong> Llámeme o escríbame al <a href=\"tel:+18019195183\" target=\"_blank\" rel=\"noopener\">801-919-5183</a>, yo misma respondo, o <a href=\"https://calendly.com/susanblancorealtor/30min\" target=\"_blank\" rel=\"noopener\">reserve 30 minutos</a> directamente en mi calendario.",
"Susan Blanco, Utah Realtor · Real Broker, LLC · License #6217613-SA00 · Follow @susanblancorealtor": "Susan Blanco, Agente de Bienes Raíces en Utah &middot; Real Broker, LLC &middot; Licencia #6217613-SA00 &middot; <a href=\"https://www.instagram.com/susanblancorealtor/\" target=\"_blank\" rel=\"noopener\">Sígame en @susanblancorealtor</a>",
"Why did you move your family back to Utah from Dubai?": "¿Por qué regresó con su familia a Utah desde Dubái?",
"After nine years in Dubai, it came down to the life we wanted for our kids. Our oldest were starting middle school, and private school tuition there is massive, so Utah's public schools made a lot of sense. We also wanted our time back, a yard for the kids, real seasons, and neighbors who know your name. Not long after we moved back, our neighbor called while we were out of town to tell us we'd left the garage door open. That's Utah.": "Después de nueve años en Dubái, todo se resumió en la vida que queríamos para nuestros hijos. Los mayores estaban por entrar a la secundaria, y la colegiatura de las escuelas privadas allá es altísima, así que las escuelas públicas de Utah tenían mucho sentido. También queríamos recuperar nuestro tiempo, un patio para los niños, estaciones de verdad y vecinos que saben su nombre. Poco después de regresar, nuestro vecino nos llamó mientras estábamos fuera de la ciudad para avisarnos que habíamos dejado abierta la puerta del garaje. Así es Utah.",
"Isn't Utah kind of boring?": "¿No es Utah un poco aburrido?",
"People tell me this all the time, and I just smile. Between the hiking, the skiing, the food scene, concerts, festivals, and farmers markets, our weekends fill up fast. Is it perfect? No. Some families take a little longer to find their groove. But most of the families I work with are wondering within a few months why they waited so long.": "Me lo dicen todo el tiempo, y solo sonrío. Entre las caminatas, el esquí, la comida, los conciertos, los festivales y los mercados de agricultores, nuestros fines de semana se llenan rápido. ¿Es perfecto? No. A algunas familias les toma un poco más encontrar su ritmo. Pero la mayoría de las familias con las que trabajo, a los pocos meses, se preguntan por qué esperaron tanto.",
"What are the hard parts nobody talks about?": "¿Cuáles son las partes difíciles de las que nadie habla?",
"I'll be the first to tell you Utah isn't for everyone. The air is dry, so plan on lotion, a humidifier, and extra water. We sit around 4,300 feet, so take your first few hikes easy. Many local businesses close on Sundays, there's construction everywhere because of all the growth, winter sunsets come around 5pm, and inversion can settle smog into the valley for a few days at a time. None of it is a deal breaker for most families, but it's better to know before you come.": "Seré la primera en decirle que Utah no es para todos. El aire es seco, así que tenga a la mano crema, un humidificador y agua extra. Estamos a unos 4,300 pies de altura, así que tómese con calma las primeras caminatas. Muchos negocios locales cierran los domingos, hay construcción por todas partes por el crecimiento, en invierno el sol se pone alrededor de las 5 de la tarde y la inversión térmica puede dejar esmog en el valle por algunos días. Para la mayoría de las familias nada de esto es motivo para no venir, pero es mejor saberlo antes.",
"How cold are the winters? Do we need all wheel drive?": "¿Qué tan fríos son los inviernos? ¿Necesitamos tracción en las cuatro ruedas?",
"We get real winters with real snow, and yes, you'll be scraping your windshield some mornings. Coming from the coast of Australia, that took me a while. You don't need all wheel drive for everyday driving, but if you plan to head up the canyons to ski or drive in big storms, it makes life a lot easier. And the first snowfall on the mountains never gets old.": "Aquí hay inviernos de verdad, con nieve de verdad, y sí, algunas mañanas tendrá que raspar el parabrisas. Viniendo de la costa de Australia, eso me costó un poco. No necesita tracción en las cuatro ruedas para manejar a diario, pero si piensa subir a los cañones a esquiar o manejar en tormentas fuertes, le hará la vida mucho más fácil. Y la primera nevada en las montañas nunca deja de emocionar.",
"This is one of the most common questions I get, and it's a fair one. Salt Lake has changed a lot in the last 20 years, and Utah is more diverse and welcoming than the internet will have you believe. My own family is multicultural. Families find their people through school, sports, work, faith groups of all kinds, and local events. I don't describe neighborhoods by religion, but I'm happy to share local groups and resources so you feel at home quickly.": "Es una de las preguntas que más me hacen, y es muy válida. Salt Lake ha cambiado mucho en los últimos 20 años, y Utah es más diverso y acogedor de lo que internet le hace creer. Mi propia familia es multicultural. Las familias encuentran su lugar a través de la escuela, los deportes, el trabajo, grupos de fe de todo tipo y eventos locales. No describo los vecindarios por religión, pero con gusto le comparto grupos y recursos locales para que se sienta en casa pronto.",
"Is Salt Lake City the only place to look?": "¿Salt Lake City es el único lugar donde buscar?",
"Not at all. Most relocation searches start with Salt Lake City and end somewhere completely different. Lehi and Draper sit right between Salt Lake and Utah County, about 30 minutes to SLC and 20 to Provo. South Jordan has established neighborhoods and Daybreak. Saratoga Springs and Eagle Mountain offer newer homes with lake and mountain views. Herriman is great if you work from home and love trails. Utah is dozens of lifestyle pockets, and finding the right one is what makes the move feel right. Take my neighborhood quiz to see where you fit.": "Para nada. La mayoría de las búsquedas de reubicación empiezan en Salt Lake City y terminan en un lugar completamente distinto. Lehi y Draper están justo entre los condados de Salt Lake y Utah, a unos 30 minutos de SLC y 20 de Provo. South Jordan tiene vecindarios establecidos y Daybreak. Saratoga Springs y Eagle Mountain ofrecen casas más nuevas con vista al lago y a las montañas. Herriman es ideal si trabaja desde casa y le encantan los senderos. Utah tiene decenas de estilos de vida distintos, y encontrar el suyo es lo que hace que la mudanza se sienta bien. Haga mi <a href=\"quiz-es.html\" target=\"_blank\" rel=\"noopener\">quiz de vecindarios</a> para ver dónde encaja.",
"Where would you look with a $700K to $900K budget?": "¿Dónde buscaría con un presupuesto de $700K a $900K?",
"It depends on the lifestyle you want. Lehi for newer builds near the tech offices and shopping. Saratoga Springs for great value along the lake. Herriman for space, newer neighborhoods, and lots of parks. Sugar House for historic charm and walkable streets. South Jordan for Daybreak's amenities and an easy commute. Cottonwood Heights to live at the base of the canyons. Provo for bench homes, historic streets, and college town energy. Prices change, so I'll send you current listings for the areas on your shortlist.": "Depende del estilo de vida que busque. Lehi, para casas más nuevas cerca de las oficinas de tecnología y las tiendas. Saratoga Springs, para un gran valor junto al lago. Herriman, para espacio, vecindarios nuevos y muchos parques. Sugar House, para encanto histórico y calles caminables. South Jordan, por las amenidades de Daybreak y un trayecto fácil. Cottonwood Heights, para vivir al pie de los cañones. Provo, por sus casas en las faldas de la montaña, calles históricas y ambiente universitario. Los precios cambian, así que le enviaré propiedades actuales de las zonas en su lista.",
"For most families, yes. You'll usually get more space, a bigger yard, and mountain views for a similar budget. But Utah's secret got out a while ago and prices have climbed, so don't come in with 2015 expectations. Utah has been at or near the top of the nation for job growth, and that keeps the market competitive. I'll send you current numbers for your exact areas before you decide anything.": "Para la mayoría de las familias, sí. Normalmente obtiene más espacio, un patio más grande y vista a las montañas con un presupuesto similar. Pero el secreto de Utah ya se sabe desde hace tiempo y los precios han subido, así que no venga con expectativas de 2015. Utah ha estado entre los primeros lugares del país en crecimiento de empleo, y eso mantiene el mercado competitivo. Le enviaré números actuales de sus zonas exactas antes de que decida nada.",
"What should we do our first summer here?": "¿Qué deberíamos hacer en nuestro primer verano aquí?",
"Make a bucket list. Hike Donut Falls in Big Cottonwood Canyon and Bridal Veil Falls in Provo Canyon (bring the dog). Spend a day at Thanksgiving Point in Lehi, float the Provo River on a hot afternoon, catch a Real Salt Lake game, and take the kids to Lagoon. Saturday mornings at the Pioneer Park Farmers Market or a local bakery like Gourmandise or Les Madeleines might become your new family tradition.": "Haga una lista. Camine a Donut Falls en Big Cottonwood Canyon y a Bridal Veil Falls en Provo Canyon (lleve al perro). Pase un día en Thanksgiving Point en Lehi, flote por el río Provo en una tarde calurosa, vaya a un partido de Real Salt Lake y lleve a los niños a Lagoon. Los sábados por la mañana en el Pioneer Park Farmers Market o en una panadería local como Gourmandise o Les Madeleines pueden convertirse en su nueva tradición familiar.",
"How do we figure out what we need in our next home?": "¿Cómo sabemos lo que necesitamos en nuestra próxima casa?",
"When we moved back, we sat down as a family and made a list of non-negotiables: community, independence for our teenagers, quick access to the mountains, room to gather with family, and four seasons. I'll help you make your own list. Then we test it in person by driving your commute, visiting schools and parks, and walking the neighborhoods, so you only move once.": "Cuando regresamos, nos sentamos en familia e hicimos una lista de lo indispensable: comunidad, independencia para nuestros adolescentes, acceso rápido a las montañas, espacio para reunirnos con la familia y cuatro estaciones. Le ayudaré a hacer su propia lista. Luego la ponemos a prueba en persona: manejamos su trayecto, visitamos escuelas y parques y recorremos los vecindarios, para que solo se mude una vez.",
"Back to Top": "Volver Arriba",
"Under $500K": "Menos de $500K",
"$500K – $700K": "$500K a $700K",
"$700K – $900K": "$700K a $900K",
"$900K – $1.2M": "$900K a $1.2M",
"$1.2M – $1.5M": "$1.2M a $1.5M",
"$1.5M – $1.9M": "$1.5M a $1.9M",
"Not sure yet": "Aún no lo sé",
"Anything Else I Should Know? (optional)": "¿Algo Más Que Deba Saber? <span style=\"text-transform:none; font-weight:400; letter-spacing:0;\">(opcional)</span>",
"Send My Info to Susan": "Enviar Mi Información a Susan",
"By submitting, you agree to be contacted by Susan Blanco about your real estate needs by phone, text, or email. Message/data rates may apply. You can opt out anytime.": "Al enviar, acepta que Susan Blanco le contacte sobre sus necesidades de bienes raíces por teléfono, mensaje de texto o correo electrónico. Pueden aplicar tarifas de mensajes y datos. Puede cancelar en cualquier momento.",
"Realtor · Real Broker, LLC · The Perry Group": "Agente de Bienes Raíces &middot; Real Broker, LLC &middot; The Perry Group",
"Broker & brokerage logo goes here": "Aquí va el logo del broker y la correduría",
"Equal HousingOpportunity": "Igualdad de Oportunidades<br>en la Vivienda",
"© Susan Blanco. License #6217613-SA00, Real Broker, LLC. All information deemed reliable but not guaranteed. Not intended as legal, tax, or financial advice.": "&copy; <span id=\"year\"></span> Susan Blanco. Licencia #6217613-SA00, Real Broker, LLC. Toda la información se considera confiable pero no está garantizada. No pretende ser asesoría legal, fiscal ni financiera.",
"Home": "Inicio",
"Home Value": "Valor de Mi Casa",
"About Susan": "Sobre Susan",
"How Can I Help?": "¿Cómo Le Puedo Ayudar?",
"Where Do You Want to Start?": "¿Por Dónde Quiere Empezar?",
"Moving from California, Arizona, or overseas? Start with the real questions families ask me.": "¿Viene de California, Arizona o el extranjero? Empiece con las preguntas reales que me hacen las familias.",
"Down payments, loan types, and every step to your first set of keys.": "Pagos iniciales, tipos de préstamo y cada paso hasta recibir sus primeras llaves.",
"Sell your home and buy the next one without the stress of two moves.": "Venda su casa y compre la siguiente sin el estrés de mudarse dos veces.",
"What's My Home Worth?": "¿Cuánto Vale Mi Casa?",
"A real number from recent sales near you. Not an automated guess.": "Un número real basado en ventas recientes cerca de usted. No un cálculo automático.",
"Explore Utah ›": "Conozca Utah &rsaquo;",
"See the steps ›": "Vea los pasos &rsaquo;",
"See the plan ›": "Vea el plan &rsaquo;",
"Get my value ›": "Obtener mi valor &rsaquo;",
"Read My Story": "Lea Mi Historia",
"Free Home Value": "Valor Gratuito de Su Casa",
"What's my home worth?": "¿Cuánto vale mi casa?",
"I'll pull recent sales near you and send you a real number, usually within one business day. Not an automated estimate. No pressure to list.": "Reviso las ventas recientes cerca de usted y le envío un número real, por lo general en un día hábil. No es un cálculo automático. Sin presión para vender.",
"What you'll get": "Lo que recibirá",
"Recent sales and active listings near you, side by side.": "Ventas recientes y casas en venta cerca de usted, lado a lado.",
"The few updates that would actually move your price.": "Las pocas mejoras que realmente cambiarían su precio.",
"What your equity means for your next home, if you're buying too.": "Lo que su capital significa para su próxima casa, si también va a comprar.",
"Home Address": "Dirección de la Casa",
"When are you thinking of selling?": "¿Cuándo piensa vender?",
"Next 3 months": "Próximos 3 meses",
"3 to 6 months": "De 3 a 6 meses",
"6 to 12 months": "De 6 a 12 meses",
"More than a year out": "En más de un año",
"I'll be buying another home too": "También voy a comprar otra casa",
"Anything I Should Know? (optional)": "¿Algo Que Deba Saber? <span style=\"text-transform:none; font-weight:400; letter-spacing:0;\">(opcional)</span>",
"Send Me My Home Value": "Enviarme el Valor de Mi Casa",
"I only use your info to send your home value and follow up. Prefer to talk? Call or text 801-919-5183.": "Solo uso su información para enviarle el valor de su casa y darle seguimiento. ¿Prefiere hablar? Llame o escriba al 801-919-5183.",
"Good Question": "Buena Pregunta",
"Why not just use an online estimate?": "¿Por qué no usar solo un cálculo en línea?",
"Online estimates can't see your remodeled kitchen, your mountain view, or the street everyone wants to live on.": "Los cálculos en línea no pueden ver su cocina remodelada, su vista a las montañas ni la calle donde todos quieren vivir.",
"I can. I walk through your home, compare it to what actually sold nearby, and give you a number you can plan around.": "Yo sí. Recorro su casa, la comparo con lo que realmente se vendió cerca y le doy un número con el que puede planear.",
"See My Sell & Move-Up Plan": "Ver Mi Plan para Vender y Cambiar de Casa",
"Meet Susan": "Conozca a Susan",
"About Susan Blanco": "Sobre Susan Blanco",
"I know what it feels like to move your whole family somewhere new. I've done it more than once.": "Sé lo que se siente mudar a toda su familia a un lugar nuevo. Lo he hecho más de una vez.",
"I grew up in Sydney and Brisbane, Australia. I came to Utah for university and ended up staying for more than 20 years.": "Crecí en Sídney y Brisbane, Australia. Vine a Utah para la universidad y terminé quedándome más de 20 años.",
"Then life took us to Houston, and after that, nine years in Dubai. We loved it. But as our kids got older, we knew what we wanted for them. Real seasons. A yard. Mountains close by. Neighbors who know your name.": "Luego la vida nos llevó a Houston y después a Dubái por nueve años. Nos encantó. Pero a medida que nuestros hijos crecían, supimos lo que queríamos para ellos. Estaciones de verdad. Un patio. Montañas cerca. Vecinos que saben su nombre.",
"So in 2020, we moved our family back to Utah.": "Así que en 2020 regresamos con nuestra familia a Utah.",
"The spreadsheets. The what ifs. Leaving people you love behind. I've lived all of it. That's why I do this work, and why I help families relocating from California, Arizona, and overseas find the right home in Lehi, Draper, and the Wasatch Front.": "Las hojas de cálculo. Los \"¿y si...?\". Dejar atrás a la gente que uno quiere. Lo he vivido todo. Por eso hago este trabajo y ayudo a familias que se mudan desde California, Arizona y el extranjero a encontrar el hogar ideal en Lehi, Draper y el Wasatch Front.",
"Book 30 Minutes": "Reservar 30 Minutos",
"What Matters to Me": "Lo Que Me Importa",
"What I Believe": "En Lo Que Creo",
"Family First": "La Familia Primero",
"My family is multicultural. I want every family I work with to find a place where everyone belongs.": "Mi familia es multicultural. Quiero que cada familia con la que trabajo encuentre un lugar donde todos pertenezcan.",
"Experiences Over Things": "Experiencias Antes Que Cosas",
"The right home gives you more Sunday walks, ski days, and dinners around the island.": "El hogar correcto le da más paseos de domingo, días de esquí y cenas alrededor de la isla de la cocina.",
"Straight Talk": "Hablar Claro",
"I tell you what I'd tell my own family. Even when it's not what you want to hear.": "Le digo lo que le diría a mi propia familia. Aunque no sea lo que quiere escuchar.",
"Better Than Yesterday": "Mejor Que Ayer",
"Hard work, clear goals, and a focus on what matters most. For me and for my clients.": "Trabajo duro, metas claras y enfoque en lo que más importa. Para mí y para mis clientes.",
"My clients are my best marketing. If you don't love the experience and how you feel at the end, I haven't done my job.": "Mis clientes son mi mejor publicidad. Si no le encanta la experiencia y cómo se siente al final, no he hecho mi trabajo.",
"The Details": "Los Detalles",
"Role": "Puesto",
"License": "Licencia",
"Areas": "Zonas",
"Specialty": "Especialidad",
"Languages": "Idiomas",
"Contact": "Contacto",
"Realtor, Real Broker, LLC · The Perry Group": "Agente de Bienes Raíces, Real Broker, LLC &middot; The Perry Group",
"Lehi, Draper, Salt Lake City, and the Wasatch Front": "Lehi, Draper, Salt Lake City y el Wasatch Front",
"Families relocating from California, Arizona, and overseas": "Familias que se mudan desde California, Arizona y el extranjero",
"English and Spanish website, multicultural family": "Sitio web en inglés y español, familia multicultural",
"Moving Your Family to Utah": "Mudar a Su Familia a Utah",
"Four seasons, mountains minutes away, and more home for your money. Here's what families find here, plus the real questions they ask me before they move.": "Cuatro estaciones, montañas a minutos y más casa por su dinero. Esto es lo que las familias encuentran aquí, además de las preguntas reales que me hacen antes de mudarse.",
"Not sure which area fits your family?": "¿No sabe qué zona le queda a su familia?",
"My neighborhood quiz takes about two minutes and points you to the areas that match how you live.": "Mi quiz de vecindarios toma unos dos minutos y le muestra las zonas que encajan con su estilo de vida.",
"Office": "Oficina",
"Brokerage": "Correduría",
"Explore": "Explorar",
"Talk to Susan": "Hable con Susan",
"Get in Touch": "Contácteme",
"Fill out the quick form on my Let's Talk page. It takes about a minute.": "Llene el formulario rápido en mi página Hablemos. Toma alrededor de un minuto.",
"Fill out the quick form above. It takes about a minute.": "Llene el formulario rápido de arriba. Toma alrededor de un minuto."
};
  var UI = {
    en: { title: document.title, placeholder: 'Neighborhoods you love, must-haves, questions about the area...',
          sending: 'Sending...', sent: 'Message Sent', submit: 'Send My Info to Susan',
          ok: "Thank you! Your message is on its way to Susan. She'll be in touch soon.",
          err: 'Something went wrong. Please try again or call/text 801-919-5183.',
          btn: 'ES', btnLabel: 'Ver en español', btnLang: 'es', field: 'English',
          captcha: 'Please complete the quick security check above the button.' },
    es: { title: (document.body.getAttribute('data-title-es') || 'Su Mudanza a Utah | Susan Blanco'), placeholder: 'Vecindarios que le encantan, lo indispensable, preguntas sobre la zona...',
          sending: 'Enviando...', sent: 'Mensaje Enviado', submit: 'Enviar Mi Información a Susan',
          ok: '¡Gracias! Su mensaje va en camino a Susan. Se pondrá en contacto muy pronto.',
          err: 'Algo salió mal. Intente de nuevo o llame o escriba al 801-919-5183.',
          btn: 'EN', btnLabel: 'View in English', btnLang: 'en', field: 'Español',
          captcha: 'Por favor complete la verificación de seguridad rápida arriba del botón.' }
  };
  var SEL = '.tr, .fa-links a, .start-card .go, .value p, .promise p, .story p, .footer-links a, .footer-col h4, .cred-card .k, .check-row span, .hv-copy h2, .top-label, .ask-card p, .brand-text .tag, .nav-cta .long, .nav-cta .btn-primary, .navbtn, .script, h1, h2, h3, .lead, .hero-btns .btn, .why-item p, .toc-box, .answer-tag, .answer p, .table-label, .stat-cell .label, .stat-cell p, .cell-title, .fine-print, .faq-a p, .cta-row .btn, .cta-row p, .location-copy p, .about-text p, .credentials, .step p, .section-head p, .field-label, .pill-group label, option, #submit-btn, .consent, footer .contact-line, .broker-logo-slot, .fh span, .legal';
  var norm = function (t) { return t.replace(/\s+/g, ' ').trim(); };
  var items = [];
  document.querySelectorAll('option').forEach(function (o) { if (!o.hasAttribute('value')) { o.value = o.text; } });
  document.querySelectorAll(SEL).forEach(function (el) {
    var es = ES[norm(el.textContent)];
    if (es) { items.push({ el: el, en: el.innerHTML, es: es }); }
  });
  var current = 'en';
  window.i18nT = function (k) { return UI[current][k]; };
  function apply(lang) {
    current = lang;
    items.forEach(function (it) { it.el.innerHTML = lang === 'es' ? it.es : it.en; });
    var y = document.getElementById('year'); if (y) { y.textContent = new Date().getFullYear(); }
    var u = UI[lang];
    document.documentElement.lang = lang;
    document.title = u.title;
    var n = document.getElementById('notes'); if (n) { if (!n.dataset.phEn) { n.dataset.phEn = n.placeholder; } n.placeholder = lang === 'es' ? (n.dataset.phEs || u.placeholder) : n.dataset.phEn; }
    var f = document.getElementById('lang-field'); if (f) { f.value = u.field; }
    document.querySelectorAll('a[data-quiz]').forEach(function (a) { a.href = lang === 'es' ? 'quiz-es.html' : 'quiz.html'; });
    if (window.sbThemeLabel) { window.sbThemeLabel(); }
    var b = document.getElementById('lang-btn');
    if (b) { b.textContent = u.btn; b.setAttribute('aria-label', u.btnLabel); b.setAttribute('lang', u.btnLang); }
    try { localStorage.setItem('sb-lang', lang); } catch (e) {}
  }
  var lb = document.getElementById('lang-btn'); if (lb) lb.addEventListener('click', function () { apply(current === 'en' ? 'es' : 'en'); });
  var start = 'en';
  try { if (/[?&]lang=es\b/.test(location.search) || localStorage.getItem('sb-lang') === 'es') { start = 'es'; } } catch (e) {}
  if (start === 'es') { apply('es'); }
})();


  var yr = document.getElementById('year'); if (yr) { yr.textContent = new Date().getFullYear(); }

  (function(){
  var form = document.querySelector('form.js-lead');
  if (!form) { return; }
  var msg = document.getElementById('form-msg');
  var submitBtn = document.getElementById('submit-btn');
  var sectionField = document.getElementById('page-section');

  /* Pre-fill from links like contact.html?src=First-Time%20Buyer&int=int-buy */
  try {
    var q = new URLSearchParams(location.search);
    if (q.get('src') && sectionField) { sectionField.value = q.get('src'); }
    var r = q.get('int') && document.getElementById(q.get('int')); if (r) { r.checked = true; }
  } catch (e) {}
  var submitLabel = submitBtn.innerHTML;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (window.sbCaptcha && !window.sbCaptcha.ready()) {
      msg.textContent = i18nT('captcha');
      msg.className = 'err';
      msg.style.display = '';
      return;
    }
    submitLabel = submitBtn.innerHTML; submitBtn.disabled = true;
    submitBtn.textContent = i18nT('sending');
    msg.className = '';
    msg.style.display = 'none';

    var data = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    }).then(function (response) {
      if (response.ok) {
        form.reset();
        if (window.sbCaptcha) { window.sbCaptcha.reset(); }
        document.getElementById('lang-field').value = i18nT('field');
        msg.textContent = i18nT('ok');
        msg.className = 'ok';
        submitBtn.textContent = i18nT('sent');
      } else {
        return response.json().then(function (data) {
          var errorMsg = (data && data.errors) ? data.errors.map(function(err){return err.message;}).join(', ') : i18nT('err');
          msg.textContent = errorMsg;
          msg.className = 'err';
          if (window.sbCaptcha) { window.sbCaptcha.reset(); }
          submitBtn.disabled = false;
          submitBtn.innerHTML = submitLabel;
        });
      }
    }).catch(function () {
      msg.textContent = i18nT('err');
      msg.className = 'err';
      submitBtn.disabled = false;
      submitBtn.innerHTML = submitLabel;
    });
  });
})();


/* ---------- SPAM PROTECTION: Cloudflare Turnstile (free) ----------
   1. Create a free widget at dash.cloudflare.com > Turnstile for the domain where this page lives.
   2. Paste its SITE KEY between the quotes below.
   3. In Formspree, open this form > Settings > CAPTCHA, choose Cloudflare Turnstile and paste the SECRET KEY.
   While SITE_KEY is empty, the form works exactly as before (the hidden honeypot still blocks basic bots). */
(function () {
  var SITE_KEY = '0x4AAAAAAF8G451-l1UUjMKe';
  var box = document.getElementById('turnstile-box');
  var widgetId = null;
  window.sbCaptcha = null;
  if (!SITE_KEY || !box) { return; }
  window.sbCaptcha = {
    ready: function () { var i = box.querySelector('input[name="cf-turnstile-response"]'); return !!(i && i.value); },
    reset: function () { try { if (window.turnstile && widgetId !== null) { window.turnstile.reset(widgetId); } } catch (e) {} }
  };
  window.sbTurnstileLoad = function () {
    box.hidden = false;
    widgetId = window.turnstile.render(box, { sitekey: SITE_KEY, theme: 'light', language: document.documentElement.lang === 'es' ? 'es' : 'en' });
  };
  var s = document.createElement('script');
  s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=sbTurnstileLoad&render=explicit';
  s.async = true; s.defer = true;
  s.onerror = function () { window.sbCaptcha = null; };
  document.head.appendChild(s);
})();


/* Dark / light mode button and Back to Top */
(function () {
  var root = document.documentElement, btn = document.getElementById('theme-btn');
  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  try { var saved = localStorage.getItem('sb-theme'); if (saved === 'dark' || saved === 'light') { root.setAttribute('data-theme', saved); } } catch (e) {}
  function isDark() {
    var t = root.getAttribute('data-theme');
    if (t === 'dark') { return true; }
    if (t === 'light') { return false; }
    return !!(mq && mq.matches);
  }
  window.sbThemeLabel = function () {
    if (!btn) { return; }
    var es = root.lang === 'es', d = isDark();
    btn.setAttribute('aria-label', d ? (es ? 'Cambiar a modo claro' : 'Switch to light mode') : (es ? 'Cambiar a modo oscuro' : 'Switch to dark mode'));
  };
  if (btn) {
    btn.addEventListener('click', function () {
      var next = isDark() ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('sb-theme', next); } catch (e) {}
      window.sbThemeLabel();
    });
  }
  if (mq && mq.addEventListener) { mq.addEventListener('change', window.sbThemeLabel); }
  window.sbThemeLabel();
  var top = document.getElementById('top-btn');
  if (top) { top.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); var h = document.querySelector('header a, header button'); if (h) { h.focus({ preventScroll: true }); } }); }
})();


/* Call/Text menu: works on phones (call or text) and computers (copy the number) */
(function () {
  var btn = document.getElementById('call-btn'), menu = document.getElementById('call-menu'), copy = document.getElementById('cm-copy');
  if (!btn || !menu) { return; }
  var L = {
    en: { call: 'Call 801-919-5183', text: 'Text 801-919-5183', copy: 'Copy number', copied: 'Copied!' },
    es: { call: 'Llamar al 801-919-5183', text: 'Enviar texto al 801-919-5183', copy: 'Copiar número', copied: '¡Copiado!' }
  };
  function t() { return L[document.documentElement.lang === 'es' ? 'es' : 'en']; }
  function setOpen(o) {
    menu.hidden = !o; btn.setAttribute('aria-expanded', o ? 'true' : 'false');
    if (o) { var s = t(); menu.querySelector('.cm-call').textContent = s.call; menu.querySelector('.cm-text').textContent = s.text; copy.textContent = s.copy; }
  }
  btn.addEventListener('click', function (e) { e.stopPropagation(); setOpen(menu.hidden); });
  document.addEventListener('click', function (e) { if (!menu.hidden && !menu.contains(e.target)) { setOpen(false); } });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { setOpen(false); } });
  menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setTimeout(function () { setOpen(false); }, 150); }); });
  copy.addEventListener('click', function () {
    function done() { copy.textContent = t().copied; setTimeout(function () { setOpen(false); }, 1000); }
    function fallback() { var ta = document.createElement('textarea'); ta.value = '801-919-5183'; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (e) {} ta.remove(); done(); }
    try { navigator.clipboard.writeText('801-919-5183').then(done, fallback); } catch (e) { fallback(); }
  });
})();


/* ---------- TOP PHOTO SLIDESHOW ----------
   To add a photo: copy one <img class="hs-slide" ...> line inside #hero-slider and change its src and alt. */
(function () {
  var box = document.getElementById('hero-slider'); if (!box) { return; }
  var slides = box.querySelectorAll('.hs-slide'), dots = box.querySelector('.hs-dots');
  var i = 0, timer = null, DELAY = 6000;
  var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (slides.length < 2) { box.querySelectorAll('.hs-arrow').forEach(function (a) { a.hidden = true; }); return; }
  slides.forEach(function (s, n) {
    var d = document.createElement('button'); d.type = 'button'; d.setAttribute('aria-label', 'Photo ' + (n + 1));
    d.addEventListener('click', function () { show(n); restart(); }); dots.appendChild(d);
  });
  function show(n) {
    i = (n + slides.length) % slides.length;
    slides.forEach(function (s, k) { s.classList.toggle('is-active', k === i); });
    dots.querySelectorAll('button').forEach(function (d, k) { d.setAttribute('aria-current', k === i ? 'true' : 'false'); });
  }
  function start() { if (!still && !timer) { timer = setInterval(function () { show(i + 1); }, DELAY); } }
  function stop() { clearInterval(timer); timer = null; }
  function restart() { stop(); start(); }
  box.querySelector('.hs-prev').addEventListener('click', function () { show(i - 1); restart(); });
  box.querySelector('.hs-next').addEventListener('click', function () { show(i + 1); restart(); });
  box.addEventListener('mouseenter', stop); box.addEventListener('mouseleave', start);
  box.addEventListener('focusin', stop); box.addEventListener('focusout', start);
  var x0 = null, swipe = box.closest('.hero') || box;
  swipe.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  swipe.addEventListener('touchend', function (e) { if (x0 === null) { return; } var dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) { show(dx < 0 ? i + 1 : i - 1); restart(); } x0 = null; });
  show(0); start();
})();

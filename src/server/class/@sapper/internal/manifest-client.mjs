// This file is generated by Sapper — do not edit it!
// webpack does not support export * as root_comp yet so do a two line import/export
import * as root_comp from './layout.svelte';
export { root_comp };
export { default as ErrorComponent } from '../../../routes/_error.svelte';

export const ignore = [/^\/web-push-client\/?$/, /^\/farma\/check_ws_consulta_registro_dep_sap_grafico\/data\/?$/];

export const components = [
	{
		js: () => import(/* webpackChunkName: "index" */ "../../../routes/index.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "pg$45scheduled$45tasks_main" */ "../../../routes/pg-scheduled-tasks/main/index.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "oms$45soporte" */ "../../../routes/oms-soporte/index.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "oms$45soporte_control_comunicaciones" */ "../../../routes/oms-soporte/control_comunicaciones/index.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "oms$45soporte_fecha_mssql_novedades" */ "../../../routes/oms-soporte/fecha_mssql_novedades.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "oms$45soporte_espacio_libre_disco" */ "../../../routes/oms-soporte/espacio_libre_disco.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "oms$45soporte_jobs_novedades" */ "../../../routes/oms-soporte/jobs_novedades.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "oms$45soporte_lista_precios_promo_punto_natural" */ "../../../routes/oms-soporte/lista_precios/promo/punto_natural.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "oms$45soporte_lista_precios_promo_economicas" */ "../../../routes/oms-soporte/lista_precios/promo/economicas.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "oms$45soporte_lista_precios_promo_medicity" */ "../../../routes/oms-soporte/lista_precios/promo/medicity.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "oms$45soporte_lista_precios_promo_paf" */ "../../../routes/oms-soporte/lista_precios/promo/paf.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "oms$45soporte_lista_precios_todas" */ "../../../routes/oms-soporte/lista_precios/todas.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "oms$45soporte_control$45jobs_resumen" */ "../../../routes/oms-soporte/control-jobs/resumen/index.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "oms$45soporte_control$45jobs_cola" */ "../../../routes/oms-soporte/control-jobs/cola/index.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "oms$45soporte_jobs_todos" */ "../../../routes/oms-soporte/jobs_todos.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "oms$45soporte_farmacias_lista_farmacias" */ "../../../routes/oms-soporte/farmacias/lista_farmacias.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "oms$45soporte_farmacias_activas_medi" */ "../../../routes/oms-soporte/farmacias/activas_medi.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "oms$45soporte_farmacias_activas_eco" */ "../../../routes/oms-soporte/farmacias/activas_eco.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "oms$45soporte_farmacias_activas_paf" */ "../../../routes/oms-soporte/farmacias/activas_paf.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "oms$45soporte_summary" */ "../../../routes/oms-soporte/summary/index.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "pg$45api$45web" */ "../../../routes/pg-api-web/index.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "test_pag" */ "../../../routes/test_pag/index.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "about" */ "../../../routes/about.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "farma_clientes_novedad_con_asignacion_corporativo" */ "../../../routes/farma/clientes_novedad_con_asignacion_corporativo/index.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "farma_check_ws_consulta_registro_dep_sap_grafico" */ "../../../routes/farma/check_ws_consulta_registro_dep_sap_grafico/index.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "farma_check_ws_consulta_registro_dep_sap_grafico_test2" */ "../../../routes/farma/check_ws_consulta_registro_dep_sap_grafico/test2.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "farma_check_ws_consulta_registro_dep_sap_grafico_test" */ "../../../routes/farma/check_ws_consulta_registro_dep_sap_grafico/test.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "farma_ite_integrador_sincronizacion_proveedores" */ "../../../routes/farma/ite_integrador_sincronizacion_proveedores/index.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "farma_ite_integradorsap_tbl_cliente_duplicados" */ "../../../routes/farma/ite_integradorsap_tbl_cliente_duplicados/index.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "farma_cargar_ventas_matriz_faltante_sap" */ "../../../routes/farma/cargar_ventas_matriz_faltante_sap/index.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "farma_log_pa_cambiar_estado_factReserv" */ "../../../routes/farma/log_pa_cambiar_estado_factReserv/index.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "farma_carga_transferencias_farmacias" */ "../../../routes/farma/carga_transferencias_farmacias/index.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "farma_carga_devoluciones_farmacias" */ "../../../routes/farma/carga_devoluciones_farmacias/index.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "farma_consulta_guias_con_novedades" */ "../../../routes/farma/consulta_guias_con_novedades/index.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "farma_fact_elect_pv_car_sin_aut" */ "../../../routes/farma/fact_elect_pv_car_sin_aut/index.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "farma_fact_elect_sap_novedades" */ "../../../routes/farma/fact_elect_sap_novedades/index.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "farma_carga_ventas_matriz_sap" */ "../../../routes/farma/carga_ventas_matriz_sap/index.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "farma_control_comunicaciones" */ "../../../routes/farma/control_comunicaciones/index.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "farma_carga_planes_mercadeo" */ "../../../routes/farma/carga_planes_mercadeo/index.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "farma_fact_elect_pv_sin_aut" */ "../../../routes/farma/fact_elect_pv_sin_aut/index.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "farma_log_seguimiento_sap" */ "../../../routes/farma/log_seguimiento_sap/index.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "farma_registro_depositos_consultar" */ "../../../routes/farma/registro_depositos/consultar.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "farma_inconsistencias_revision" */ "../../../routes/farma/inconsistencias/revision/index.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "farma_inconsistencias_revision_consultar" */ "../../../routes/farma/inconsistencias/revision/consultar.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "farma_fact_elect_sap" */ "../../../routes/farma/fact_elect_sap/index.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "farma_farmacias" */ "../../../routes/farma/farmacias/index.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "oms" */ "../../../routes/oms/index.svelte")
	},
	{
		js: () => import(/* webpackChunkName: "oms_summary" */ "../../../routes/oms/summary/index.svelte")
	}
];

export const routes = [
	{
		// index.svelte
		pattern: /^\/$/,
		parts: [
			{ i: 0 }
		]
	},

	{
		// pg-scheduled-tasks/main/index.svelte
		pattern: /^\/pg-scheduled-tasks\/main\/?$/,
		parts: [
			null,
			{ i: 1 }
		]
	},

	{
		// oms-soporte/index.svelte
		pattern: /^\/oms-soporte\/?$/,
		parts: [
			{ i: 2 }
		]
	},

	{
		// oms-soporte/control_comunicaciones/index.svelte
		pattern: /^\/oms-soporte\/control_comunicaciones\/?$/,
		parts: [
			null,
			{ i: 3 }
		]
	},

	{
		// oms-soporte/fecha_mssql_novedades.svelte
		pattern: /^\/oms-soporte\/fecha_mssql_novedades\/?$/,
		parts: [
			null,
			{ i: 4 }
		]
	},

	{
		// oms-soporte/espacio_libre_disco.svelte
		pattern: /^\/oms-soporte\/espacio_libre_disco\/?$/,
		parts: [
			null,
			{ i: 5 }
		]
	},

	{
		// oms-soporte/jobs_novedades.svelte
		pattern: /^\/oms-soporte\/jobs_novedades\/?$/,
		parts: [
			null,
			{ i: 6 }
		]
	},

	{
		// oms-soporte/lista_precios/promo/punto_natural.svelte
		pattern: /^\/oms-soporte\/lista_precios\/promo\/punto_natural\/?$/,
		parts: [
			null,
			null,
			null,
			{ i: 7 }
		]
	},

	{
		// oms-soporte/lista_precios/promo/economicas.svelte
		pattern: /^\/oms-soporte\/lista_precios\/promo\/economicas\/?$/,
		parts: [
			null,
			null,
			null,
			{ i: 8 }
		]
	},

	{
		// oms-soporte/lista_precios/promo/medicity.svelte
		pattern: /^\/oms-soporte\/lista_precios\/promo\/medicity\/?$/,
		parts: [
			null,
			null,
			null,
			{ i: 9 }
		]
	},

	{
		// oms-soporte/lista_precios/promo/paf.svelte
		pattern: /^\/oms-soporte\/lista_precios\/promo\/paf\/?$/,
		parts: [
			null,
			null,
			null,
			{ i: 10 }
		]
	},

	{
		// oms-soporte/lista_precios/todas.svelte
		pattern: /^\/oms-soporte\/lista_precios\/todas\/?$/,
		parts: [
			null,
			null,
			{ i: 11 }
		]
	},

	{
		// oms-soporte/control-jobs/resumen/index.svelte
		pattern: /^\/oms-soporte\/control-jobs\/resumen\/?$/,
		parts: [
			null,
			null,
			{ i: 12 }
		]
	},

	{
		// oms-soporte/control-jobs/cola/index.svelte
		pattern: /^\/oms-soporte\/control-jobs\/cola\/?$/,
		parts: [
			null,
			null,
			{ i: 13 }
		]
	},

	{
		// oms-soporte/jobs_todos.svelte
		pattern: /^\/oms-soporte\/jobs_todos\/?$/,
		parts: [
			null,
			{ i: 14 }
		]
	},

	{
		// oms-soporte/farmacias/lista_farmacias.svelte
		pattern: /^\/oms-soporte\/farmacias\/lista_farmacias\/?$/,
		parts: [
			null,
			null,
			{ i: 15 }
		]
	},

	{
		// oms-soporte/farmacias/activas_medi.svelte
		pattern: /^\/oms-soporte\/farmacias\/activas_medi\/?$/,
		parts: [
			null,
			null,
			{ i: 16 }
		]
	},

	{
		// oms-soporte/farmacias/activas_eco.svelte
		pattern: /^\/oms-soporte\/farmacias\/activas_eco\/?$/,
		parts: [
			null,
			null,
			{ i: 17 }
		]
	},

	{
		// oms-soporte/farmacias/activas_paf.svelte
		pattern: /^\/oms-soporte\/farmacias\/activas_paf\/?$/,
		parts: [
			null,
			null,
			{ i: 18 }
		]
	},

	{
		// oms-soporte/summary/index.svelte
		pattern: /^\/oms-soporte\/summary\/?$/,
		parts: [
			null,
			{ i: 19 }
		]
	},

	{
		// pg-api-web/index.svelte
		pattern: /^\/pg-api-web\/?$/,
		parts: [
			{ i: 20 }
		]
	},

	{
		// test_pag/index.svelte
		pattern: /^\/test_pag\/?$/,
		parts: [
			{ i: 21 }
		]
	},

	{
		// about.svelte
		pattern: /^\/about\/?$/,
		parts: [
			{ i: 22 }
		]
	},

	{
		// farma/clientes_novedad_con_asignacion_corporativo/index.svelte
		pattern: /^\/farma\/clientes_novedad_con_asignacion_corporativo\/?$/,
		parts: [
			null,
			{ i: 23 }
		]
	},

	{
		// farma/check_ws_consulta_registro_dep_sap_grafico/index.svelte
		pattern: /^\/farma\/check_ws_consulta_registro_dep_sap_grafico\/?$/,
		parts: [
			null,
			{ i: 24 }
		]
	},

	{
		// farma/check_ws_consulta_registro_dep_sap_grafico/test2.svelte
		pattern: /^\/farma\/check_ws_consulta_registro_dep_sap_grafico\/test2\/?$/,
		parts: [
			null,
			null,
			{ i: 25 }
		]
	},

	{
		// farma/check_ws_consulta_registro_dep_sap_grafico/test.svelte
		pattern: /^\/farma\/check_ws_consulta_registro_dep_sap_grafico\/test\/?$/,
		parts: [
			null,
			null,
			{ i: 26 }
		]
	},

	{
		// farma/ite_integrador_sincronizacion_proveedores/index.svelte
		pattern: /^\/farma\/ite_integrador_sincronizacion_proveedores\/?$/,
		parts: [
			null,
			{ i: 27 }
		]
	},

	{
		// farma/ite_integradorsap_tbl_cliente_duplicados/index.svelte
		pattern: /^\/farma\/ite_integradorsap_tbl_cliente_duplicados\/?$/,
		parts: [
			null,
			{ i: 28 }
		]
	},

	{
		// farma/cargar_ventas_matriz_faltante_sap/index.svelte
		pattern: /^\/farma\/cargar_ventas_matriz_faltante_sap\/?$/,
		parts: [
			null,
			{ i: 29 }
		]
	},

	{
		// farma/log_pa_cambiar_estado_factReserv/index.svelte
		pattern: /^\/farma\/log_pa_cambiar_estado_factReserv\/?$/,
		parts: [
			null,
			{ i: 30 }
		]
	},

	{
		// farma/carga_transferencias_farmacias/index.svelte
		pattern: /^\/farma\/carga_transferencias_farmacias\/?$/,
		parts: [
			null,
			{ i: 31 }
		]
	},

	{
		// farma/carga_devoluciones_farmacias/index.svelte
		pattern: /^\/farma\/carga_devoluciones_farmacias\/?$/,
		parts: [
			null,
			{ i: 32 }
		]
	},

	{
		// farma/consulta_guias_con_novedades/index.svelte
		pattern: /^\/farma\/consulta_guias_con_novedades\/?$/,
		parts: [
			null,
			{ i: 33 }
		]
	},

	{
		// farma/fact_elect_pv_car_sin_aut/index.svelte
		pattern: /^\/farma\/fact_elect_pv_car_sin_aut\/?$/,
		parts: [
			null,
			{ i: 34 }
		]
	},

	{
		// farma/fact_elect_sap_novedades/index.svelte
		pattern: /^\/farma\/fact_elect_sap_novedades\/?$/,
		parts: [
			null,
			{ i: 35 }
		]
	},

	{
		// farma/carga_ventas_matriz_sap/index.svelte
		pattern: /^\/farma\/carga_ventas_matriz_sap\/?$/,
		parts: [
			null,
			{ i: 36 }
		]
	},

	{
		// farma/control_comunicaciones/index.svelte
		pattern: /^\/farma\/control_comunicaciones\/?$/,
		parts: [
			null,
			{ i: 37 }
		]
	},

	{
		// farma/carga_planes_mercadeo/index.svelte
		pattern: /^\/farma\/carga_planes_mercadeo\/?$/,
		parts: [
			null,
			{ i: 38 }
		]
	},

	{
		// farma/fact_elect_pv_sin_aut/index.svelte
		pattern: /^\/farma\/fact_elect_pv_sin_aut\/?$/,
		parts: [
			null,
			{ i: 39 }
		]
	},

	{
		// farma/log_seguimiento_sap/index.svelte
		pattern: /^\/farma\/log_seguimiento_sap\/?$/,
		parts: [
			null,
			{ i: 40 }
		]
	},

	{
		// farma/registro_depositos/consultar.svelte
		pattern: /^\/farma\/registro_depositos\/consultar\/?$/,
		parts: [
			null,
			null,
			{ i: 41 }
		]
	},

	{
		// farma/inconsistencias/revision/index.svelte
		pattern: /^\/farma\/inconsistencias\/revision\/?$/,
		parts: [
			null,
			null,
			{ i: 42 }
		]
	},

	{
		// farma/inconsistencias/revision/consultar.svelte
		pattern: /^\/farma\/inconsistencias\/revision\/consultar\/?$/,
		parts: [
			null,
			null,
			null,
			{ i: 43 }
		]
	},

	{
		// farma/fact_elect_sap/index.svelte
		pattern: /^\/farma\/fact_elect_sap\/?$/,
		parts: [
			null,
			{ i: 44 }
		]
	},

	{
		// farma/farmacias/index.svelte
		pattern: /^\/farma\/farmacias\/?$/,
		parts: [
			null,
			{ i: 45 }
		]
	},

	{
		// oms/index.svelte
		pattern: /^\/oms\/?$/,
		parts: [
			{ i: 46 }
		]
	},

	{
		// oms/summary/index.svelte
		pattern: /^\/oms\/summary\/?$/,
		parts: [
			null,
			{ i: 47 }
		]
	}
];

if (typeof window !== 'undefined') {
	import("D:/PROYECTOS_TFS/ITE_TareasProgramadasValidaciones/ITE_Validaciones_Interfaces/OpenMonitoringSystem/node_modules/sapper/sapper-dev-client.js").then(client => {
		client.connect(10000);
	});
}
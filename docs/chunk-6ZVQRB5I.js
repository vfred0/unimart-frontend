var t=function(e){return e.Home="",e.Article="articulo",e.Suggest="proponer",e.ArticleSuggest="articulo/proponer",e.PublishArticle="publicar-articulo",e.EditArticle="editar-articulo",e.ProposedArticles="articulos-propuestos",e.ProfileProposedArticles="perfil/articulos-propuestos",e.Auth="auth",e.Login="login",e.AuthLogin="auth/login",e.Exchanges="intercambios",e.Profile="perfil",e.EditProfile="editar-perfil",e.ProfileEditProfile="perfil/editar-perfil",e}(t||{}),n=[{path:t.Home,title:"Inicio",withMenu:!0,withHeader:!0,withBack:!1,withPreferences:!0,withPreferencesAndButtonEditProfile:!0},{path:t.Article,title:"Art\xEDculo",withMenu:!1,withHeader:!0,withBack:!0,withPreferences:!0,withPreferencesAndButtonEditProfile:!0},{path:t.PublishArticle,title:"Publicar art\xEDculo",withMenu:!0,withHeader:!0,withBack:!1,withPreferences:!0,withPreferencesAndButtonEditProfile:!0},{path:t.EditArticle,title:"Editar art\xEDculo",withMenu:!1,withHeader:!0,withBack:!0,withPreferences:!0,withPreferencesAndButtonEditProfile:!0},{path:t.Exchanges,title:"Intercambios",withMenu:!0,withHeader:!0,withBack:!1,withPreferences:!0,withPreferencesAndButtonEditProfile:!0},{path:t.ArticleSuggest,title:"Proponer art\xEDculo",withMenu:!1,withHeader:!0,withBack:!0,withPreferences:!1,withPreferencesAndButtonEditProfile:!1},{path:t.Profile,title:"Perfil",withMenu:!0,withHeader:!0,withBack:!1,withPreferences:!0,withPreferencesAndButtonEditProfile:!0},{path:t.ProfileEditProfile,title:"Editar perfil",withMenu:!1,withHeader:!0,withBack:!0,withPreferences:!0,withPreferencesAndButtonEditProfile:!1},{path:t.ProfileProposedArticles,title:"Art\xEDculos propuestos",withMenu:!1,withHeader:!0,withBack:!0,withPreferences:!0,withPreferencesAndButtonEditProfile:!0}],i="";function u(e){return e.replace(/^\/+/,"").replace(/\/\w+-\w+-\w+-\w+-\w+\/?/g,"/").replace(/\/$/,"")}function c(e){i=u(e)}function l(e){return e===i}function o(){let e=r();return e?e.withMenu:!1}function r(){return n.find(e=>i===e.path)}function f(){let e=r();return e?e.withBack:!1}function s(){let e=r();return e?e.withPreferences:!1}function a(){let e=r();return e?e.withPreferencesAndButtonEditProfile:!1}function h(){let e=r();return e?e.withHeader:!1}function w(){let e=r();return e?e.title:""}function P(){return i===t.Article}function d(){let e="o-layout";return o()?`${e}-with-menu`:`${e}-without-menu`}function B(){return i===t.Home}export{t as a,c as b,l as c,o as d,f as e,s as f,a as g,h,w as i,P as j,d as k,B as l};

/*
 * Type : "Java Script / JS" 
 * Company : "ElastikJS",
 * Maker : "Emre BALCI",
 * Version : "1.00.0",
 * Date / Time : "04.01.2016 / 11:20",
 * Copyright : "Copyright 2016 ElastikJS documents";
 * Status : "Nomal";
 * Framework : "jQuery v1.10.2";
 * Using : "Brackets, v1.5"
*/

(function( $ ){
    //stil >>
    $.fn.stil = function( ayar, sure ) {
        var p = $.extend({}, ayar);
        return $(this).css({
            color: p.yazi_renk,
            backgroundColor: p.arka_renk,
            backgroundImage: p.arka_resim,
            textDecoration: p.yazi_cizgi,
            display: p.ekran,
            wordSpacing: p.kelime_bosluk,
            letterSpacing: p.harf_bosluk,
            verticalAlign: p.yazi_dikey_hizalama,
            textTransform: p.yazi_donusum,
            textAlign: p.yazi_yatay_hizala,
            textIndent: p.paragraf_basi,
            lineHeight: p.satir_yukseklik,
            fontFamily: p.yazi_tipi,
            fontVariant: p.yazi_varyant,
            fontWeight: p.yazi_kalinlik,
            fontSize: p.yazi_boyutu,
            listStyleType: p.list_stil_tipi,
            listStyleImage: p.liste_stil_resim,
            position: p.posizyon,
            top: p.ust,
            left: p.sol,
            bottom: p.alt,
            right: p.sag,
            width: p.genislik,
            height: p.yukseklik,
            overflow: p.tasanlar,
            visibility: p.gorunurluk,
            zIndex: p.z_kordinat,
            cursor: p.imlec,
            margin: p.dis_bosluk,
            marginTop: p.dis_bosluk_ust,
            marginLeft: p.dis_bosluk_sol,
            marginBottom: p.dis_bosluk_alt,
            marginRight: p.dis_bosluk_sag,
            padding: p.ic_bosluk,
            paddingTop: p.ic_bosluk_ust,
            paddingLeft: p.ic_bosluk_sol,
            paddingBottom: p.ic_bosluk_alt,
            paddingRight: p.ic_bosluk_sag,
            border: p.dis_cizgi,
            borderTop: p.dis_cizgi_ust,
            borderLeft: p.dis_cizgi_sol,
            borderBottom: p.dis_cizgi_alt,
            borderRight: p.dis_cizgi_sag,
            borderColor: p.dis_cizgi_renk,
            borderTopColor: p.dis_cizgi_renk_ust,
            borderLeftColor: p.dis_cizgi_renk_sol,
            borderBottomColor: p.dis_cizgi_renk_alt,
            borderRightColor: p.dis_cizgi_renk_sag,
            borderStyle: p.dis_cizgi_stil,
            borderTopStyle: p.dis_cizgi_stil_ust,
            borderLeftStyle: p.dis_cizgi_stil_sol,
            borderBottomStyle: p.dis_cizgi_stil_alt,
            borderRightStyle: p.dis_cizgi_stil_sag,
            borderWidth: p.dis_cizgi_genislik,
            borderTopWidth: p.dis_cizgi_genislik_ust,
            borderLeftWidth: p.dis_cizgi_genislik_sol,
            borderBottomWidth: p.dis_cizgi_genislik_alt,
            borderRightWidth: p.dis_cizgi_genislik_sag,
            WebkitTransition: p.web_gecis,
            MozTransition: p.moz_gecis,
            OTransition: p.o_gecis,
            transition: p.gecis
        });
    }
}( jQuery ));

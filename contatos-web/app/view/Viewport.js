/**
 * The main application viewport, which displays the whole application
 * @extends Ext.Viewport
 */
Ext.define('Linguagil.view.Viewport', {
    extend: 'Ext.Viewport',    
    layout: 'fit',
    
    requires: [
        'Linguagil.view.contato.Grid',
        'Linguagil.view.contato.Formulario'
    ],
    
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
            items: [
                {
                    xtype: 'contatogrid'
                }
            ]
        });
                
        me.callParent(arguments);
    }
});
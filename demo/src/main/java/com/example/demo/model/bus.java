package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * estacion
 */
@Entity
public class bus {
    @Id
    @GeneratedValue
    Long id;

    private String placa;
    private String modelo;
    private String rutas;
    

    /**
     * @return the id
     */
    public Long getId() {
        return id;
    }

    /**
     * @return the Placa
     */
    public String getPlaca() {
        return placa;
    }

    /**
     * @return the Modelo
     */
    public String getModelo() {
        return modelo;
    }
    /**
     * @return the Rutas
     */
    public String getRutas() {
        return rutas;
    }


    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * @param placa the placa to set
     */
    public void setPlaca(String placa) {
        this.placa = placa;
    }

    /**
     * @param modelo the modelo to set
     */
    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    /**
     * @param rutas the rutas to set
     */
    public void setRutas(String rutas) {
        this.rutas = rutas;
    }
}
package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * estacion
 */
@Entity
public class estaciones {
    @Id
    @GeneratedValue
    Long id;

    private String estacion;
    private Integer dia;
    private Integer hora;
    /**
     * @return the id
     */
    public Long getId() {
        return id;
    }

    /**
     * @return the Estacion
     */
    public String getEstacion() {
        return estacion;
    }

    /**
     * @return the dia
     */
    public Integer getDia() {
        return dia;
    }

    /**
     * @return the hora
     */
    public Integer getHora() {
        return hora;
    }

    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * @param name the name to set
     */
    public void setEstacion(String estacion) {
        this.estacion = estacion;
    }

    /**
     * @param dia the dia to set
     */
    public void setDia(Integer dia) {
        this.dia = dia;
    }

    /**
     * @param hora the hora to set
     */
    public void setHora(Integer hora) {
        this.hora = hora;
    }
}
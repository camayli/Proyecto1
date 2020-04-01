package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * estacion
 */
@Entity
public class conductor {
    @Id
    @GeneratedValue
    Long id;

    private String nombre;
    private String ciudad;
    private String telefono;
    private String direccion;
    /**
     * @return the id
     */
    public Long getId() {
        return id;
    }

    /**
     * @return the Nombre
     */
    public String getNombre() {
        return nombre;
    }
    /**
     * @return the Ciudad
     */
    public String getCiudad() {
        return ciudad;
    }
    /**
     * @return the Telefono
     */
    public String getTelefono() {
        return telefono;
    }
    /**
     * @return the Direccion
     */
    public String getDireccion() {
        return direccion;
    }


    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * @param Nombre the Nombre to set
     */
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    /**
     * @param Ciudad the Ciudad to set
     */
    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    /**
     * @param Telefono the Telefono to set
     */
    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    /**
     * @param Direccion the Direccion to set
     */
    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }
}
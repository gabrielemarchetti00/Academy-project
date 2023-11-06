package com.corso.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "BandiereRisultato")
public class BandiereRisultato {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "IdBandiereRisultato")
	private int id;
	
	@Column(name = "IdRisultato")
	private int idRisultato;
	
	@Column(name = "Bandiera")
	private String bandiera;
	
	@Column(name = "Indovinato")
	private boolean indovinato;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getIdRisultato() {
		return idRisultato;
	}

	public void setIdRisultato(int idRisultato) {
		this.idRisultato = idRisultato;
	}

	public String getBandiera() {
		return bandiera;
	}

	public void setBandiera(String bandiera) {
		this.bandiera = bandiera;
	}

	public boolean isIndovinato() {
		return indovinato;
	}

	public void setIndovinato(boolean indovinato) {
		this.indovinato = indovinato;
	}

	public BandiereRisultato(int idRisultato, String bandiera, boolean indovinato) {
		this.idRisultato = idRisultato;
		this.bandiera = bandiera;
		this.indovinato = indovinato;
	}
	
	public BandiereRisultato() {}
	
	
	
}

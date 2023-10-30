package com.corso.model;

import javax.persistence.*;

import com.corso.standardwords.AlgorithmType;

@Entity
@Table(name = "Match")
public class Match{
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "IdMatch")
	private int id;
	
	@Column(name="Input")
	private String input;
	
	@Column(name="IdParolaStandard")
	private String standardword;
	
	@Column(name="Algoritmo")
	@Enumerated(EnumType.STRING)
	private AlgorithmType algorithm;
	
	@Column(name="CheckWord")
	private boolean confirm;
	
	public Match() {}
	
	public Match(String input, String sw, AlgorithmType algorithm) {
		this.input = input;
		this.standardword = sw;
		this.algorithm = algorithm;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getInput() {
		return input;
	}

	public void setInput(String input) {
		this.input = input;
	}

	public String getStandardword() {
		return standardword;
	}

	public void setStandardword(String sw) {
		this.standardword = sw;
	}

	public AlgorithmType getAlgorithm() {
		return algorithm;
	}

	public void setAlgorithm(AlgorithmType algorithm) {
		this.algorithm = algorithm;
	}

	public boolean isConfirm() {
		return confirm;
	}

	public void setConfirm(boolean confirm) {
		this.confirm = confirm;
	}
	
	
	

}


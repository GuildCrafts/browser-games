using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Button : MonoBehaviour {

	public event Action<Button> buttonPressed;

	[SerializeField]
	Color buttonColor;

	Material material;

	public float buttonSpeed = 0.1f;

	// Use this for initialization
	void Start () {
		material = GetComponent<Renderer>().material;
		material.color = buttonColor;
	}

	// Update is called once per frame
	void Update () {

	}

	Coroutine coroutine;
	internal void Activate()
	{
		if (isAnimating) return;

		if (coroutine != null) StopCoroutine(coroutine);
		coroutine = StartCoroutine(ChangeObjColor(GetComponent<Renderer>().material));

		if (buttonPressed != null) buttonPressed(this);
	}

	bool isAnimating = false;
	private IEnumerator ChangeObjColor(Material material)
	{
		isAnimating = true;
		LeanTween.cancel(gameObject);
		//Tween our color Change
		LeanTween.moveLocalZ(gameObject, 0.2f, buttonSpeed);
		//LeanTween.color(gameObject, Color.black, 0.5f).setEase(LeanTweenType.easeInOutSine);
		//material.color = Color.black
		yield return new WaitForSeconds(buttonSpeed);
		//Tween our color change
		LeanTween.moveLocalZ(gameObject, 0, buttonSpeed);
		//LeanTween.color(gameObject, buttonColor, 0.5f).setEase(LeanTweenType.easeInOutSine);



		isAnimating = false;
	}
}
